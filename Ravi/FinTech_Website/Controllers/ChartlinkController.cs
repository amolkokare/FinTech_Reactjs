using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace FinTech_Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartlinkController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ChartlinkController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]

        public JsonResult Get()
        {
            string query = @"select top(100) * from [dbo].[NSEAnalysisData]
where Volume>100000 AND CLOSE1>50 AND CLOSE1>sma20 AND CLOSE1>sma50 AND CLOSE1>sma200
AND TIMESTAMP1 in (select Max(TIMESTAMP1) from dbo.NSEAnalysisData SYMBOL)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DatabaseAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

    }
}
