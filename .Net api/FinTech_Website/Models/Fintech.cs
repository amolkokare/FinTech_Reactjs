using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Corporate_Website.Models
{
    public class Fintech
    {
        
        public int FintechId { get; set; }
        
        public string SYMBOL { get; set; }
        public DateTime TIMESTAMP { get; set; }
        
        
        
        public string HIGH { get; set; }
        public decimal LOW { get; set; }
       
        public decimal Volume { get; set; }
        public decimal sma05 { get; set; }
        public decimal sma10 { get; set; }
        public decimal sma15 { get; set; }
        public decimal sma20 { get; set; }
        public decimal sma50 { get; set; }
        public decimal sma200 { get; set; }
        public decimal Percent_of_Price_Change5_days { get; set; }
        public decimal Volume_changein_20Days { get; set; }
        public decimal Relative_Volume { get; set; }
        
        public decimal WeekHigh52 { get; set; }
        public decimal WeekLow52 { get; set; }
        public decimal Away_From_52WeekHigh { get; set; }
        public decimal Away_From_52WeekLow { get; set; }
        

    }
}