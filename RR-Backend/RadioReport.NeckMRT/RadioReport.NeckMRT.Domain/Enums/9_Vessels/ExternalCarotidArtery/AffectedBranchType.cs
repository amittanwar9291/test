using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum AffectedBranchType : byte
	{
		None = 0,

		[RadioReportId("nec_m_090208", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		SuperiorThyroidArtery = 1,

		[RadioReportId("nec_m_090209", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		LingualArtery = 2,

		[RadioReportId("nec_m_090210", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		FacialArtery = 3,

		[RadioReportId("nec_m_090211", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		OccipitalArtery = 4,

		[RadioReportId("nec_m_090212", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		PosteriorAuricularArtery = 5,

		[RadioReportId("nec_m_090213", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		SuperficialTemporalArtery = 6,

		[RadioReportId("nec_m_090214", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		MaxillaryArtery = 7,

		[RadioReportId("nec_m_090215", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		MiddleMeningealArtery = 8,

		[RadioReportId("nec_m_090216", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
		AscendingPharyngealArtery = 9
	}
}