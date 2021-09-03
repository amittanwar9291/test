using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Logic.Models.ReportList
{
    public class ReportPatientResponse
    {
        public ReportBase Report { get; set; }
        public PatientDto Patient { get; set; }
    }
}
