using RadioReport.Common.Consts;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class GetDuplicateImportAllowedDataSyncRequest : KafkaCachingRequestBase
    {
        public GetDuplicateImportAllowedDataSyncRequest() : base(KafkaTopic.Request.GetDuplicateImportAllowedDataSync)
        {
        }
    }
}
