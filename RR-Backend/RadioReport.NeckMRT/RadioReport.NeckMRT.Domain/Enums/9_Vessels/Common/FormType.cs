using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("nec_m_090502", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090509", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090520", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_090530", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_090540", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_0904187", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090559", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090576", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		Concentric = 1,

		[RadioReportId("nec_m_090503", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
		[RadioReportId("nec_m_090510", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_090521", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		[RadioReportId("nec_m_090531", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
		[RadioReportId("nec_m_090541", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		[RadioReportId("nec_m_0904188", InstanceName = nameof(VesselsFindingType.BrachiocephalicTrunk))]
		[RadioReportId("nec_m_090560", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_090577", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		Eccentric = 2
    }
}