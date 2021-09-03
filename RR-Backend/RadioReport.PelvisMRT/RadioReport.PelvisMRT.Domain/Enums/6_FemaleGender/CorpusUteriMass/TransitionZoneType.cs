using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
	public enum TransitionZoneType : byte
	{
		None = 0,

		[RadioReportId("pel_m_0602431", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
		Intact = 1,

		[RadioReportId("pel_m_0602432", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
		Irregular = 2,

		[RadioReportId("pel_m_0602433", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
		Discontinuity = 3,

		[RadioReportId("pel_m_0602435", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
		Thickening = 4
	}
}
