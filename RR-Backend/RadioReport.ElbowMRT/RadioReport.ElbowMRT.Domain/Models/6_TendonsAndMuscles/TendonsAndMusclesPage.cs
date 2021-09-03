using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;
using RadioReport.ElbowMRT.Domain.Enums;
using RadioReport.Common.Logic.Attributes;
using RadioReport.ElbowMRT.Domain.Constants;

namespace RadioReport.ElbowMRT.Domain.Models
{
    [GeneratedControllerPageModel("ElbowMRT/TendonsAndMuscles")]
    public class TendonsAndMusclesPage : PageModelBase<TendonsAndMusclesPage>
    {
        [RadioReportId("elb_m_060104l", InstanceName = InstanceNames.TendonsAndMuscles, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<TendonsAndMusclesFinding> Findings { get; set; }
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ElbowMrtTendonsAndMuscles;
    }
}
