using RadioReport.Common.Consts;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class CheckExistingImportRequest : KafkaCachingRequestBase
    {
        public CheckExistingImportRequest() : base(KafkaTopic.Request.CheckExistingImport)
        {
        }

        public string StudyInstanceUid { get; set; }

        public string AccessionNumber { get; set; }
    }
}
