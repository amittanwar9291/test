using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxCT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Constants;

namespace RadioReport.ThoraxCT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxCT/Mediastinum")]
    public class MediastinumPage : PageModelBase<MediastinumPage>
    {
        [RadioReportId("tho_c_040103-l", InstanceName = InstanceNames.Mediastinum, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<MediastinumFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxCtMediastinum;
    }
}
