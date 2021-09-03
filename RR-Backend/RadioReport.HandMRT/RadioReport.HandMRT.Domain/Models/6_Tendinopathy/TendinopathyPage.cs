using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.HandMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.HandMRT.Domain.Constants;

namespace RadioReport.HandMRT.Domain.Models
{
    [GeneratedControllerPageModel("HandMRT/Tendinopathy")]
    public class TendinopathyPage : PageModelBase<TendinopathyPage>
    {
        [RadioReportId("han_m_060103-l", InstanceName = InstanceNames.Tendinopathy, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<TendinopathyFinding> Findings { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HandMrtTendinopathy;
    }
}
