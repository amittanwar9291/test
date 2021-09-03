using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("HeadCT/CerebrospinalFluidSpace")]
    public class CerebrospinalFluidSpacePage : PageModelBase<CerebrospinalFluidSpacePage>
    {
        [RadioReportId("hea_c_090103-l", InstanceName = InstanceNames.CerebrospinalFluidSpace, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<CerebrospinalFluidSpaceFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtCerebrospinalFluidSpace;
    }
}
