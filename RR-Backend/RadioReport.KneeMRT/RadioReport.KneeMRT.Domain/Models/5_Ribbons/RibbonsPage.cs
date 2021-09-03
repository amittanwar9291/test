using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.KneeMRT.Domain.Constants;
using RadioReport.KneeMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.KneeMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("KneeMRT/Ribbons")]
    public class RibbonsPage : PageModelBase<RibbonsPage>
    {
        // 5.1 Findings
        [RadioReportId("kne_m_050103", InstanceName = InstanceNames.Ribbons, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<RibbonsFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.KneeMrtRibbons;

        public new static RibbonsPage GetEmpty() =>
            new RibbonsPage
            {
                AreFindings = AreFindings.False,
                Findings = new List<RibbonsFinding>
                {
                    new RibbonsFinding()
                    {
                        IsDeleted = false
                    }
                }
            };
    }
}
