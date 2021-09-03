using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum ArteriovenousMalformationType : byte
	{
		None = 0,

		[RadioReportId("nec_m_0904228", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904262", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		HighFlowLesion = 1,

		[RadioReportId("nec_m_0904229", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904263", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		LowFlowLesion = 2
	}
}