using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum PathologyType : byte
	{
		None = 0,

		[RadioReportId("nec_m_090302", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090307", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090312", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_090317", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_090322", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090225", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090356", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090361", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		StenosisOcclusion = 1,

		[RadioReportId("nec_m_090303", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090308", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090313", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_090318", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_090323", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090226", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090357", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090362", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		Dissection = 2,

		[RadioReportId("nec_m_090304", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090309", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090314", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_090319", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_090324", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		InflammatoryChanges = 3,

		[RadioReportId("nec_m_090305", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090310", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090315", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_090320", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_090325", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090227", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090358", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090363", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		Aneurysm = 4,

		[RadioReportId("nec_m_090359", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090364", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		VascularMalformation = 5
	}
}