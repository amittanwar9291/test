using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxMRT.Domain.Constants;
using RadioReport.ThoraxMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxMRT/LungParenchyma")]
    public class LungParenchymaPage : PageModelBase<LungParenchymaPage>
    {
        [RadioReportId("tho_m_050103-l", InstanceName = InstanceNames.LungParenchyma, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<LungParenchymaFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxMrtLungParenchyma;
    }
}
