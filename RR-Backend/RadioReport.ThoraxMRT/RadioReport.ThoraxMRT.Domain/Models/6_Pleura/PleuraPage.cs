using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxMRT.Domain.Constants;
using RadioReport.ThoraxMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("ThoraxMRT/Pleura")]
    public class PleuraPage : PageModelBase<PleuraPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxMrtPleura;

        [RadioReportId("tho_m_060104", InstanceName = InstanceNames.Pleura, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<PleuraFinding> Findings { get; set; }
    }
}
