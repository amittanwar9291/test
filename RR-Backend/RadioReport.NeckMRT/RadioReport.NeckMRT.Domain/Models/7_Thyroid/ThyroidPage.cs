using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Constants;
using RadioReport.NeckMRT.Domain.Enums;

namespace RadioReport.NeckMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("NeckMRT/Thyroid")]
    public class ThyroidPage : PageModelBase<ThyroidPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.NeckMrtThyroid;
        
        [RadioReportId("nec_m_070103-l", InstanceName = InstanceNames.Thyroid, IsExportable = false)]
        public AreFindings AreFindings { get; set; }
        public IEnumerable<ThyroidFinding> Findings { get; set; }
    }
}
