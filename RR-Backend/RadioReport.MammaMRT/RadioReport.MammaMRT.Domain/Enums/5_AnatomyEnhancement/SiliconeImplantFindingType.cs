using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum SiliconeImplantFindingType: byte
    {
        None = 0,

        [RadioReportId("mam_m_050305-1", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding1))]
        [RadioReportId("mam_m_050305-2", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding2))]
        Capsulitis = 1,

        [RadioReportId("mam_m_050306-1", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding1))]
        [RadioReportId("mam_m_050306-2", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding2))]
        CapsularFibrosis = 2,

        [RadioReportId("mam_m_050307-1", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding1))]
        [RadioReportId("mam_m_050307-2", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding2))]
        Rupture = 3,

        [RadioReportId("mam_m_050308-1", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding1))]
        [RadioReportId("mam_m_050308-2", InstanceName = nameof(AnatomyEnhancementPage.SiliconeImplantFinding2))]
        Siliconom = 4
    }
}
