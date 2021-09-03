using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums
{
    public enum TherapieContinueType
    {
        None = 0,

        [RadioReportId("pel_m_020204", InstanceName = nameof(AnamnesisPage.RadiotherapyContinueType))]
        [RadioReportId("pel_m_020209", InstanceName = nameof(AnamnesisPage.HormoneAblativeContinueType))]
        [RadioReportId("pel_m_020303", InstanceName = nameof(AnamnesisPage.NeoadjuvantTherapyContinueType))]
        Continuous = 1,

        [RadioReportId("pel_m_020205", InstanceName = nameof(AnamnesisPage.RadiotherapyContinueType))]
        [RadioReportId("pel_m_020210", InstanceName = nameof(AnamnesisPage.HormoneAblativeContinueType))]
        [RadioReportId("pel_m_020304", InstanceName = nameof(AnamnesisPage.NeoadjuvantTherapyContinueType))]
        DateUntil = 2
    }
}
