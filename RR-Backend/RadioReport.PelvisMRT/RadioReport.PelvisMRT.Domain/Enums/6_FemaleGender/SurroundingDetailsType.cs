using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    public enum SurroundingDetailsType : byte
    {
        None = 0,

        [RadioReportId("pel_m_060436", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_0605219", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        Extensive = 1,

        [RadioReportId("pel_m_060437", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_0605220", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        Streaky = 2
    }
}
