using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
	public enum InfarctStageType : byte
	{
		None = 0,

		[RadioReportId("hea_c_040506", InstanceName = nameof(VesselsFindingType.Ischemia))]
		EarlyHyperacute = 1,

		[RadioReportId("hea_c_040507", InstanceName = nameof(VesselsFindingType.Ischemia))]
		LateHyperacute = 2,

		[RadioReportId("hea_c_040508", InstanceName = nameof(VesselsFindingType.Ischemia))]
		Acute = 3,

		[RadioReportId("hea_c_040509", InstanceName = nameof(VesselsFindingType.Ischemia))]
		Subacute = 4,

		[RadioReportId("hea_c_040510", InstanceName = nameof(VesselsFindingType.Ischemia))]
		Chronic = 5,

		[RadioReportId("hea_c_040511", InstanceName = nameof(VesselsFindingType.Ischemia))]
		CannotBeDetermined = 6
	}
}
