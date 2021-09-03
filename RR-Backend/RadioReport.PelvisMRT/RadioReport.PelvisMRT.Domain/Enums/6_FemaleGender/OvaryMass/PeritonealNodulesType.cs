using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
	public enum PeritonealNodulesType : byte
	{
		None = 0,

		[RadioReportId("pel_m_060416", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
		Unifocal = 1,

		[RadioReportId("pel_m_060417", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
		Multifocal = 2
	}
}
