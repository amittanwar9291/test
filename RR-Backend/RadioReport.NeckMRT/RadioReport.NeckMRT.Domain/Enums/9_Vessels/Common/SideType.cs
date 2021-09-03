using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum SideType : byte
	{
		None = 0,

		[RadioReportId("nec_m_090203", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090203", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090203", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_090203", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_090203", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090203", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		[RadioReportId("nec_m_090371", InstanceName = nameof(VesselsFindingType.Veins))]
		Right = 1,

		[RadioReportId("nec_m_090204", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090204", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090204", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_090204", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_090204", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090204", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		[RadioReportId("nec_m_090372", InstanceName = nameof(VesselsFindingType.Veins))]
		Left = 2
	}
}