using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Vessels
{
	public enum SubarachnoidHemorrhageType : byte
	{
		None = 0,

		[RadioReportId("nec_m_090475", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904184", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		Minor = 1,

		[RadioReportId("nec_m_090476", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
		[RadioReportId("nec_m_0904185", InstanceName = nameof(VesselsFindingType.CircleOfWillisCerebralArteries))]
		Pronounced = 2
	}
}