using System.Collections.Generic;

namespace RadioReport.Common.Logic.Models.ReportList
{
    public class ReportListResponse
    {
        public List<ReportPatientResponse> ReportPatientList { get; } = new List<ReportPatientResponse>();
        public ReportListOptions ReportListOptions { get; set; }
    }
}
