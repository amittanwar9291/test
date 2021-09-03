using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Logic.Attributes;
using System.Collections.Generic;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Constants;

namespace RadioReport.AngiographyCT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyCT/CoronaryArteries")]
    public class CoronaryArteriesPage : PageModelBase<CoronaryArteriesPage>
    {
        [RadioReportId("ang_c_040103-l", InstanceName = InstanceNames.CoronaryArteries, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<CoronaryArteriesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyCtCoronaryArteries;
    }
}
