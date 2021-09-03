using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    public enum WideningObstructionType : byte
	{
		None = 0,

		[RadioReportId("pel_m_0604439", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0603463", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        Hematometra = 1,

		[RadioReportId("pel_m_0604440", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0603464", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        Hydrometra = 2
	}
}
