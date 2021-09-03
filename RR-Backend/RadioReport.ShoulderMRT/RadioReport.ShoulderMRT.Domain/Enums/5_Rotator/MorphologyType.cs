using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum MorphologyType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0504237", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Thinning = 1,

        [RadioReportId("sho_m_0504238", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Thickening = 2
    }
}
