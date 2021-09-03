using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum BayneClassificationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050514", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeI = 1,

        [RadioReportId("sho_m_050515", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeII = 2,

        [RadioReportId("sho_m_050516", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeIII = 3,

        [RadioReportId("sho_m_050517", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeIV = 4
    }
}
