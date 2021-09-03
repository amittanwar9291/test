using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Response
{
    public class GetCvi42XmlSyncResponse : KafkaSyncResponseBase
    {
        public bool Exist { get; set; }
        public string JsonContent { get; set; }
    }
}
