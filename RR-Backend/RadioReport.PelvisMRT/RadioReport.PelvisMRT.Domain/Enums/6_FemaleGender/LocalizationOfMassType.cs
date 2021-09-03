using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
	public enum LocalizationOfMassType : byte
	{
		None = 0,

		[RadioReportId("pel_m_060498", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
		FundusUteri = 1,

		[RadioReportId("pel_m_060499", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
		CorpusUteri = 2,
		
		[RadioReportId("pel_m_0604100", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
		IsthmusUteri = 3
	}
}
