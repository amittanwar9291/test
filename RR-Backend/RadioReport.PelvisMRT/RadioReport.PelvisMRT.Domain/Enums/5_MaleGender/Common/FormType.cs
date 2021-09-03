using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050420", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050420", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0503114", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		Oval = 1,

		[RadioReportId("pel_m_050421", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050421", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0503115", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		Around = 2,

		[RadioReportId("pel_m_050422", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050422", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0503116", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		Irregular = 3

	}
}
