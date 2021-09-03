using System;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class ValidateClientTokenRequest : KafkaCachingRequestBase
    {
        public ValidateClientTokenRequest() : base(KafkaTopic.Request.ValidateClientTokenSync)
        {
        }

        public Guid ClientTokenId { get; set; }
        public Application Application { get; set; }
        public string Browser { get; set; }
        public string OperatingSystem { get; set; }
    }
}