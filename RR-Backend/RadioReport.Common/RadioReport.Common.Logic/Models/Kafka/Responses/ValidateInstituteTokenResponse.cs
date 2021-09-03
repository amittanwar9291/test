using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class ValidateInstituteTokenResponse : KafkaSyncResponseBase
    {
        public bool IsValid { get; set; }
        public Institute Institute { get; set; }
    }
}
