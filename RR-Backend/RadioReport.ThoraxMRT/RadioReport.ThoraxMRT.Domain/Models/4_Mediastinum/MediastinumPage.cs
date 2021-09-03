using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxMRT.Domain.Constants;
using RadioReport.ThoraxMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxMRT/Mediastinum")]
    public class MediastinumPage : PageModelBase<MediastinumPage>
    {
        [RadioReportId("tho_m_040103-l", InstanceName = InstanceNames.Mediastinum, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<MediastinumFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxMrtMediastinum;
    }
}
