using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HipMRT.Domain.Constants;
using RadioReport.HipMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.HipMRT.Domain.Models
{
    [GeneratedControllerPageModel("HipMRT/CartilageAndLabrum")]
    public class CartilageAndLabrumPage : PageModelBase<CartilageAndLabrumPage>
    {
        [RadioReportId("hip_m_050104", InstanceName = InstanceNames.CartilageAndLabrum, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<CartilageAndLabrumFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HipMrtCartilageAndLabrum;
    }
}
