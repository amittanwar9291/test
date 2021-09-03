using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum LafosseClassificationType: byte
    {
        None = 0,

        [RadioReportId("sho_m_0504220", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Type1 = 1,

        [RadioReportId("sho_m_0504223", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Type2 = 2,

        [RadioReportId("sho_m_0504224", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Type3 = 3,

        [RadioReportId("sho_m_0505207", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Type4 = 4,

        [RadioReportId("sho_m_0505208", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Type5 = 5
    }
}
