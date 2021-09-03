using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum CrossType: byte
    {
        None = 0,

        [RadioReportId("sho_m_0504204", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        SnyderA = 1,

        [RadioReportId("sho_m_0504208", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        SnyderB = 2,

        [RadioReportId("sho_m_0504209", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Interstitiell = 3
    }
}
