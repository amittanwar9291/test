using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum MarginType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050417", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050417", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0503111", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		Circumscribed = 1,

		[RadioReportId("pel_m_050418", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050418", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0503112", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		NonCircumscribed = 2

	}
}
