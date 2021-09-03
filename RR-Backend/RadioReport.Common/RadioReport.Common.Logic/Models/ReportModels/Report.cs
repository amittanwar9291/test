using System;
using System.Collections.Generic;

namespace RadioReport.Common.Logic.Models.ReportModels
{
    public class Report : ReportBase
    {
        public Guid LicenseFractionId { get; set; }
        public DateTime LicensingDate { get; set; }
        public List<PageInfo> Pages { get; } = new List<PageInfo>();
        public byte TotalPageCount { get; set; }
        public List<ReportResult> ReportResults { get; } = new List<ReportResult>();
    }
}
