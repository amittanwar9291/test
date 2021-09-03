using RadioReport.Common.Consts;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class ValidateInstituteTokenRequest : KafkaCachingRequestBase
    {
        public ValidateInstituteTokenRequest() : base(KafkaTopic.Request.ValidateInstituteTokenSync)
        {
        }

        public string InstituteToken { get; set; }
    }
}
