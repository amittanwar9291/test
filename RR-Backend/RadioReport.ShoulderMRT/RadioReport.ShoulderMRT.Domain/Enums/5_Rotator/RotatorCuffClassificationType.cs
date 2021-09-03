using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum RotatorCuffClassificationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050511", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        BayneAndBatermann = 1,

        [RadioReportId("sho_m_050512", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Snyder = 2
    }
}
