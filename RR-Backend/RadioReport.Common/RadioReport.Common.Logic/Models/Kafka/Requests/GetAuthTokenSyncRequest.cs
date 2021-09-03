using System;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class GetAuthTokenSyncRequest : KafkaCachingRequestBase
    {
        public GetAuthTokenSyncRequest() : base(KafkaTopic.Request.GetAuthTokenSync)
        {
        }

        public Guid UserId { get; set; }
        public Guid AccessTokenId { get; set; }
        public Guid RefreshTokenId { get; set; }
        public Application Application { get; set; }
    }
}
