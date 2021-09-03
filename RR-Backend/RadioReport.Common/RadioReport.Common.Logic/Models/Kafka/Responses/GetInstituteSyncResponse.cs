using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class GetInstituteSyncResponse : KafkaSyncResponseBase
    {
        public Institute Institute { get; set; }
    }
}
