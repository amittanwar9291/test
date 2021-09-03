using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
	public enum HeterogeneousType : byte
	{
		None = 0,

		[RadioReportId("pel_m_060218", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0603450", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        NonEnhancingParts = 1,

		[RadioReportId("pel_m_060219", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0603451", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        NodularParts = 2,

		[RadioReportId("pel_m_0602404", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        Septal = 3
	}
}
