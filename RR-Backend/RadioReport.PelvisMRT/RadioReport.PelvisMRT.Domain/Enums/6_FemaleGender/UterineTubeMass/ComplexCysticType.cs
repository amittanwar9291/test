using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    public enum ComplexCysticType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0602414", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        NodularParts = 1,

        [RadioReportId("pel_m_0602415", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        Septa = 2,

        [RadioReportId("pel_m_0602418", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        SpokeWheelAppearance = 3
    }
}
