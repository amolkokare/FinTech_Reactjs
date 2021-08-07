using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FinTech_Website.Models
{
    public class Chartlink
    {
      
            public int ID { get; set; }
            public string SYMBOL { get; set; }
            public float CLOSE1 { get; set; }
            public DateTime TIMESTAMP1 { get; set; }

            public float sma05 { get; set; }

            public float sma10 { get; set; }
            public float sma20 { get; set; }
            public float sma50 { get; set; }
            public float sma200 { get; set; }
            public float WEEKHIGH { get; set; }
            public float WEEKLOW { get; set; }

            public float Per_chng_1D { get; set; }

            public float Avg_Price_5days { get; set; }

            public float Volume { get; set; }
            public float Avg_Vol_20day { get; set; }
            public float Relative_Volume { get; set; }
            public float Away_52WeekHigh { get; set; }
            public float Away_52WeekLow { get; set; }

    }
}
