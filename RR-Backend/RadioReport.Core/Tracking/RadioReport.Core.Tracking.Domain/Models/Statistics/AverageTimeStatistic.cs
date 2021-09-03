using System;
using System.Collections.Generic;
using System.Text;

namespace RadioReport.Core.Tracking.Domain.Models.Statistics
{
    public class AverageTimeStatistic
    {
        public int Year { get; set; }
        public float AverageTime { get; set; }
        public string ModuleName { get; set; }
    }
}
