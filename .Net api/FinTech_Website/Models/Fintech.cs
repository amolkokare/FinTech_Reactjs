﻿using System;
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
        public string CLOSE1 { get; set; }
        public string TIMESTAMP1 { get; set; }

        public decimal sma05 { get; set; }

        public decimal sma10 { get; set; }
        public decimal sma20 { get; set; }
        public decimal sma50 { get; set; }
        public decimal sma100 { get; set; }
        public decimal WEEKHIGH { get; set; }
        public decimal WEEKLOW { get; set; }

        public decimal Relative_Volume { get; set; }

        public decimal Percentage_change { get; set; }

        public decimal Avg_Price_5days { get; set; }
        public decimal Avg_Vol_20day { get; set; }
    }
}



