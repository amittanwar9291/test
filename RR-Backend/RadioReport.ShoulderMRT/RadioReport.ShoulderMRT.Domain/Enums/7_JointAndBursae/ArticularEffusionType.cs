using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum ArticularEffusionType : byte
    {
        None = 0,

        [RadioReportId("sho_m_070216", InstanceName = nameof(JointAndBursaeFindingType.ArticularEffusion))]
        LowEffusion = 1,

        [RadioReportId("sho_m_070217", InstanceName = nameof(JointAndBursaeFindingType.ArticularEffusion))]
        Significantly = 2
    }
}