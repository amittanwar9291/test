using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum DifferentialDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("nec_m_090425", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090462", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904102", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904139", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		TakayasuArteritis = 1,

		[RadioReportId("nec_m_090426", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090463", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904103", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904140", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		GiantCellArteritis = 2,

		[RadioReportId("nec_m_090427", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090464", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904104", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904141", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		Collagenosis = 3
	}
}