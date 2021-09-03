using RadioReport.AngiographyMRT.Domain.Enums;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.AngiographyMRT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyMRT/Abdomen")]
    public class AbdomenPage : PageModelBase<AbdomenPage>
    {
        [RadioReportId("ang_m_070103-l", InstanceName = nameof(InstanceNames.Abdomen), IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<AbdomenFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyMrtAbdomen;
    }
}
