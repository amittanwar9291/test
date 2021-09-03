using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum ExtentType : byte
	{
		None = 0,

		[RadioReportId("nec_m_090402", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090438", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090478", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904115", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904152", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090327", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904198", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904232", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		Mild = 1,

		[RadioReportId("nec_m_090403", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090439", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090479", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904116", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904153", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090328", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904199", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904233", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		Moderate = 2,

		[RadioReportId("nec_m_090404", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090440", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090480", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904117", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904154", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090329", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904200", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904234", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		Severe = 3,

		[RadioReportId("nec_m_090405", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090441", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090481", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_0904118", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_0904155", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_090330", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_0904201", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904235", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		CompleteOcclusion = 4
	}
}