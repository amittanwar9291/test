using System;
using RadioReport.Common.Consts;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Request
{
    public class GetCvi42XmlSyncRequest : KafkaCachingRequestBase
    {
        public GetCvi42XmlSyncRequest() : base(KafkaTopic.Request.GetCvi42XmlSync)
        {
        }

        public string StudyInstanceUid { get; set; }
    }
}
