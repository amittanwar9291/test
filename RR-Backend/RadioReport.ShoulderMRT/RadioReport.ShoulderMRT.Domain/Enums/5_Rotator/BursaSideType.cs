using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum BursaSideType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0504206", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        PulleyType2 = 1,

        [RadioReportId("sho_m_0504207", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        PulleyType4 = 2
    }
}
