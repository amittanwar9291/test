using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum ShapeType : byte
	{
		None = 0,

		[RadioReportId("nec_m_090431", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090468", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904108", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904145", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904177", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090347", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904218", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904252", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		Saccular = 1,

		[RadioReportId("nec_m_090432", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090469", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904109", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904146", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904178", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090348", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904219", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904253", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		Fusiform = 2,

		[RadioReportId("nec_m_090433", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090470", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904110", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904147", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904179", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		FalseAneurysm = 3
	}
}