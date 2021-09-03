using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum SignalLossFlowVoidType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050246", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050246", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		Diffuse = 1,

		[RadioReportId("pel_m_050247", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050247", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		Focal = 2

	}
}
