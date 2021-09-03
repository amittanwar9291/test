using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Logic.Attributes;
using System.Collections.Generic;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Constants;

namespace RadioReport.AngiographyCT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyCT/PelvisLegArteries")]
    public class PelvisLegArteriesPage : PageModelBase<PelvisLegArteriesPage>
    {
        public IEnumerable<PelvisLegArteriesFinding> Findings { get; set; }

        [RadioReportId("ang_c_090104-l", InstanceName = InstanceNames.PelvisLegArteries, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        [RadioReportId("ang_c_090109")]
        public bool IsNoMorePathologies { get; set; }
        
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyCtPelvisLegArteries;
    }
}
