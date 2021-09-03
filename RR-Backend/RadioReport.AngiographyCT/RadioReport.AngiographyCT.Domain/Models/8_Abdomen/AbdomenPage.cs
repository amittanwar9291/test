using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Logic.Attributes;
using RadioReport.AngiographyCT.Domain.Constants;
using RadioReport.AngiographyCT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.AngiographyCT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyCT/Abdomen")]
    public class AbdomenPage : PageModelBase<AbdomenPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyCtAbdomen;

        [RadioReportId("ang_c_080103-l", InstanceName = nameof(InstanceNames.Abdomen), IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<AbdomenFinding> Findings { get; set; }
    }
}
