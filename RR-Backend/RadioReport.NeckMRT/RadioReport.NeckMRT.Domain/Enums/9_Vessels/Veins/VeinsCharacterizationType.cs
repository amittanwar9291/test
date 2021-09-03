using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum VeinsCharacterizationType : byte
	{
		None = 0,

		[RadioReportId("nec_m_090247", InstanceName = nameof(VesselsFindingType.Veins))]
		InternalJugularVein = 1,

		[RadioReportId("nec_m_090248", InstanceName = nameof(VesselsFindingType.Veins))]
		SubclavianVein = 2,

		[RadioReportId("nec_m_090249", InstanceName = nameof(VesselsFindingType.Veins))]
		BrachiocephalicVein = 3
	}
}