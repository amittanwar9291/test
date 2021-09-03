using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum CerebralVeinsPathologyType : byte
	{
		None = 0,

		[RadioReportId("nec_m_090366", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		PartialThrombosis = 1,

		[RadioReportId("nec_m_090367", InstanceName = nameof(VesselsFindingType.CerebralVeinsDuralSinuses))]
		CompleteThrombosis = 2
	}
}