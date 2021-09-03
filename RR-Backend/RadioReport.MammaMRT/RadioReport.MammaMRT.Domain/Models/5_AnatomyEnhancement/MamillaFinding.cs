using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.MammaMRT.Domain.Models
{
    public class MamillaFinding : ModelBase
    {
        [RadioReportId("mam_m_050404-1", InstanceName = nameof(AnatomyEnhancementPage.MamillaFinding1))]
        [RadioReportId("mam_m_050404-2", InstanceName = nameof(AnatomyEnhancementPage.MamillaFinding2))]
        public bool IsRetraction { get; set; }

        [RadioReportId("mam_m_050405-1", InstanceName = nameof(AnatomyEnhancementPage.MamillaFinding1))]
        [RadioReportId("mam_m_050405-2", InstanceName = nameof(AnatomyEnhancementPage.MamillaFinding2))]
        public bool IsInvasion { get; set; }
    }
}
