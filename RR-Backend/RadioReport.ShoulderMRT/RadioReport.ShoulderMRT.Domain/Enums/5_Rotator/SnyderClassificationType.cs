using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum SnyderClassificationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050518", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Grade0 = 1,

        [RadioReportId("sho_m_050519", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeI = 2,

        [RadioReportId("sho_m_050520", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeII = 3,

        [RadioReportId("sho_m_050521", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeIII = 4,

        [RadioReportId("sho_m_050522", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeIV = 5
    }
}
