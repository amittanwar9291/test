using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
	public enum InfarctStageType : byte
	{
		None = 0,

		[RadioReportId("hea_m_040314", InstanceName = nameof(VesselsFindingType.Ischemia))]
		EarlyHyperacute = 1,

		[RadioReportId("hea_m_040315", InstanceName = nameof(VesselsFindingType.Ischemia))]
		LateHyperacute = 2,

		[RadioReportId("hea_m_040316", InstanceName = nameof(VesselsFindingType.Ischemia))]
		Acute = 3,

		[RadioReportId("hea_m_040317", InstanceName = nameof(VesselsFindingType.Ischemia))]
		Subacute = 4,

		[RadioReportId("hea_m_040318", InstanceName = nameof(VesselsFindingType.Ischemia))]
		Chronic = 5,

		[RadioReportId("hea_m_040319", InstanceName = nameof(VesselsFindingType.Ischemia))]
		CannotBeDetermined = 6
	}
}
