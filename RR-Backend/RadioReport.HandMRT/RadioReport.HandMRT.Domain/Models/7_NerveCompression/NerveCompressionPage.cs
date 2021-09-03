using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HandMRT.Domain.Constants;
using RadioReport.HandMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HandMRT.Domain.Models
{
    [GeneratedControllerPageModel("HandMRT/NerveCompression")]
    public class NerveCompressionPage : PageModelBase<NerveCompressionPage>
    {
        [RadioReportId("han_m_070103-l", InstanceName = InstanceNames.NerveCompression, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<NerveCompressionFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HandMrtNerveCompression;
    }
}
