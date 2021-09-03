using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Logic.Attributes;
using System.Collections.Generic;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Constants;

namespace RadioReport.AngiographyCT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyCT/Aorta")]
    public class AortaPage : PageModelBase<AortaPage>
    {

		[RadioReportId("ang_c_070110")]
		public bool IsNoMoreAorticPathologies { get; set; }

        [RadioReportId("ang_c_050103-l", InstanceName = InstanceNames.Aorta, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<AortaFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyCtAorta;
    }
}
