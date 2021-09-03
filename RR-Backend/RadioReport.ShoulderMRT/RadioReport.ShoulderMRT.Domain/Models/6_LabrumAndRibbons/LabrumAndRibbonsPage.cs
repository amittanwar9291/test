using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Constants;
using RadioReport.ShoulderMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("ShoulderMRT/LabrumAndRibbons")]
    public class LabrumAndRibbonsPage : PageModelBase<LabrumAndRibbonsPage>
    {
        [RadioReportId("sho_m_060103", InstanceName = InstanceNames.LabrumAndRibbons, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<LabrumAndRibbonsFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ShoulderMrtLabrumAndRibbons;
    }
}
