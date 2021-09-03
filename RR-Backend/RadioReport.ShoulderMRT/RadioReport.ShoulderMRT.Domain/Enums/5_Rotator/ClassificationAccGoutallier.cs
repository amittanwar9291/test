using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum ClassificationAccGoutallierType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050503", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeI = 1,

        [RadioReportId("sho_m_050504", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeII = 2,

        [RadioReportId("sho_m_050505", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeIII = 3,

        [RadioReportId("sho_m_050506", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeIV = 4
    }
}
