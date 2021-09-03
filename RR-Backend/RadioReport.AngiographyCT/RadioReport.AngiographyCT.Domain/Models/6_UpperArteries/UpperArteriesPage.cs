using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Logic.Attributes;
using System.Collections.Generic;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Constants;

namespace RadioReport.AngiographyCT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyCT/UpperArteries")]
    public class UpperArteriesPage : PageModelBase<UpperArteriesPage>
    {
        [RadioReportId("ang_c_060103-l", InstanceName = InstanceNames.UpperArteries, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<UpperArteriesFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyCtUpperArteries;
    }
}
