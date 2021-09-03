using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum DetailsVascularMalformationType : byte
	{
		None = 0,

		[RadioReportId("nec_m_0904227", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904261", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		ArteriovenousMalformation = 1,

		[RadioReportId("nec_m_0904230", InstanceName = nameof(VesselsFindingType.SubclavianArtery))]
		[RadioReportId("nec_m_0904264", InstanceName = nameof(VesselsFindingType.AxillaryArtery))]
		Hemangioma = 2
	}
}