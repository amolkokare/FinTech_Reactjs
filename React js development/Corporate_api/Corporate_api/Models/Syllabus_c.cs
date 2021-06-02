using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Corporate_api.Models
{
    public class Syllabus_c
    {
        public int SyllabusId { get; set; }
        public int SrNo { get; set; }
        public string CourseName { get; set; }
        public string Syllabus { get; set; }
        public string Duration { get; set; }
        public Decimal Price { get; set; }
    }
}
