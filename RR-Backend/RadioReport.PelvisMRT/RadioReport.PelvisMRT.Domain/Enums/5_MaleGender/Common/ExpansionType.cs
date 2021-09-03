using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum ExpansionType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050222", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		[RadioReportId("pel_m_050299", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		RegionalExtension = 1,
		
		[RadioReportId("pel_m_0502100", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		ExtensionToAtLeastPerineal = 2,

		[RadioReportId("pel_m_050223", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		ExtensionToAtLeastScrotal = 3

	}
}
