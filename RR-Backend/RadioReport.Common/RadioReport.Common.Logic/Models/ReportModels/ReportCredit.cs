using System;

namespace RadioReport.Common.Logic.Models.ReportModels
{
    public class ReportCredit
    {
        public ReportCredit()
        {
        }

        public ReportCredit(Guid reportId, Guid reportSessionId, Guid licenseFractionId)
        {
            ReportId = reportId;
            ReportSessionId = reportSessionId;
            LicenseFractionId = licenseFractionId;
            CreationDate = DateTime.Now.ToUniversalTime();
        }

        public Guid ReportId { get; set; }
        public Guid ReportSessionId { get; set; }
        public Guid LicenseFractionId { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
