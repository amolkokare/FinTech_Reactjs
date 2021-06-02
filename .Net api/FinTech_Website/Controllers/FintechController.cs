using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace Corporate_Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FintechController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public FintechController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]

        public JsonResult Get()
        {
            string query = @"select SYMBOL,TIMESTAMP,HIGH,LOW ,Volume,sma05,sma10,sma15,sma20,sma50,sma200,Percent_of_Price_Change5_days,Volume_changein_20Days,Relative_Volume,WeekHigh52,WeekLow52,Away_From_52WeekHigh,Away_From_52WeekLow from dbo.Fintech ";
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