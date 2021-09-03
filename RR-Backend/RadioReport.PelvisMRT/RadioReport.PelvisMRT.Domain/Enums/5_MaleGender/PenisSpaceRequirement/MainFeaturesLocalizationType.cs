using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum MainFeaturesLocalizationType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050232", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		Urethra = 1,

		[RadioReportId("pel_m_050236", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		CorpusCavernosum = 2,

		[RadioReportId("pel_m_050240", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		CorpusSpongiosum = 3,

		[RadioReportId("pel_m_050241", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		GlansPenis = 4,

		[RadioReportId("pel_m_050242", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		Prepuce = 5

	}
}
