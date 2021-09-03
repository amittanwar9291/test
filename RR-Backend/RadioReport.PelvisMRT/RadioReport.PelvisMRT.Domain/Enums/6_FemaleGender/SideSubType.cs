using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
	public enum SideSubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_060262", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        Intramural = 1,

		[RadioReportId("pel_m_060263", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        Isthmus = 3,

		[RadioReportId("pel_m_060264", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        Ampulla = 2,

		[RadioReportId("pel_m_060265", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        Infundibulum = 4
	}
}
