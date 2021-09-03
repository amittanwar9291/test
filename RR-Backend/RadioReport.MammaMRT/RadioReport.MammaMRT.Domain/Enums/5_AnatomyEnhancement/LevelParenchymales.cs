using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum LevelParenchymales : byte
    {
        None = 0,

        [RadioReportId("mam_m_050505-2", InstanceName = nameof(AnatomyEnhancementPage.OnBothSides))]
        [RadioReportId("mam_m_050505-3", InstanceName = nameof(AnatomyEnhancementPage.Right))]
        [RadioReportId("mam_m_050505-4", InstanceName = nameof(AnatomyEnhancementPage.Left))]
        Minimal = 1,

        [RadioReportId("mam_m_050506-2", InstanceName = nameof(AnatomyEnhancementPage.OnBothSides))]
        [RadioReportId("mam_m_050506-3", InstanceName = nameof(AnatomyEnhancementPage.Right))]
        [RadioReportId("mam_m_050506-4", InstanceName = nameof(AnatomyEnhancementPage.Left))]
        Mild = 2,

        [RadioReportId("mam_m_050507-2", InstanceName = nameof(AnatomyEnhancementPage.OnBothSides))]
        [RadioReportId("mam_m_050507-3", InstanceName = nameof(AnatomyEnhancementPage.Right))]
        [RadioReportId("mam_m_050507-4", InstanceName = nameof(AnatomyEnhancementPage.Left))]
        Moderate = 3,

        [RadioReportId("mam_m_050508-2", InstanceName = nameof(AnatomyEnhancementPage.OnBothSides))]
        [RadioReportId("mam_m_050508-3", InstanceName = nameof(AnatomyEnhancementPage.Right))]
        [RadioReportId("mam_m_050508-4", InstanceName = nameof(AnatomyEnhancementPage.Left))]
        Marked = 4
    }
}
