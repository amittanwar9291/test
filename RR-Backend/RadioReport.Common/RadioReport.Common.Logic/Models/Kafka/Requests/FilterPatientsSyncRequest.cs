using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.ReportList;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class FilterPatientsSyncRequest : KafkaCachingRequestBase
    {
        public FilterPatientsSyncRequest() : base(KafkaTopic.Request.FilterPatientsSync)
        {
        }

        public PatientFilterOptions FilterOptions { get; set; }
    }
}
