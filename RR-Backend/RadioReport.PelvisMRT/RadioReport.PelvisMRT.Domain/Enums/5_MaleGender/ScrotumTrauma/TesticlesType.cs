using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum TesticlesType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050267", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
		DiscontinuityOfTheTunicaAlbuginea = 1,

		[RadioReportId("pel_m_050271", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
		IntactTunicaAlbuginea = 2
	
	}
}
