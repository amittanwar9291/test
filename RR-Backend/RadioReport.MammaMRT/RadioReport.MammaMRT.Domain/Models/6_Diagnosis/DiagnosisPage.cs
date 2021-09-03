using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMRT.Domain.Constants;
using RadioReport.MammaMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.MammaMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("MammaMRT/Diagnosis")]
    public class DiagnosisPage : PageModelBase<DiagnosisPage>
    {
        [RadioReportId("mam_m_060103", InstanceName = InstanceNames.Diagnosis, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<DiagnosisFinding> Findings { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMrtDiagnosis;
    }
}
