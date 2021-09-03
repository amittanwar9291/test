using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum PartialRuptureType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0503209", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Ventral = 1,

        [RadioReportId("sho_m_0503210", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Centred = 2,

        [RadioReportId("sho_m_0503211", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Dorsal = 3
    }
}
