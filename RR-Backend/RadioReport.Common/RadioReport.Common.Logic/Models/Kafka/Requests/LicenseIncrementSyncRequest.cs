using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class LicenseIncrementSyncRequest : KafkaCachingRequestBase
    {
        public LicenseIncrementSyncRequest() : base(KafkaTopic.Request.LicenseIncrementSync)
        {
        }

        public LicenseIncrementSyncRequest(bool icd10Code, string language, ReportTypes reportType) : base(KafkaTopic.Request.LicenseIncrementSync)
        {
            LicenseParams = new TextGenerationLicenseParams
            {
                ICD10Code = icd10Code,
                Language = language,
                ReportType = reportType
            };
        }

        public TextGenerationLicenseParams LicenseParams { get; set; }
    }
}
