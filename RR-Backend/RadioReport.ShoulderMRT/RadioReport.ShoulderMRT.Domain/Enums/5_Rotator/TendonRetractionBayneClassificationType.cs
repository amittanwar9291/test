using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum TendonRetractionBayneClassificationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050416", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeI = 1,

        [RadioReportId("sho_m_050417", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeII = 2,

        [RadioReportId("sho_m_050418", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeIII = 3,

        [RadioReportId("sho_m_050419", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        GradeIV = 4
    }
}
