using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum VeinsPathologyType : byte
	{
		None = 0,

		[RadioReportId("nec_m_090374", InstanceName = nameof(VesselsFindingType.Veins))]
		Thrombosis = 1,

		[RadioReportId("nec_m_090380", InstanceName = nameof(VesselsFindingType.Veins))]
		TumorInfiltration = 2,

		[RadioReportId("nec_m_090381", InstanceName = nameof(VesselsFindingType.Veins))]
		Thrombophlebitis = 3
	}
}