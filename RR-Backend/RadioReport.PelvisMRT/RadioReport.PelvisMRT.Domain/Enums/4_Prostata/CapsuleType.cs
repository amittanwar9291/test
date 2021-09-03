using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum CapsuleType : byte
	{
		None = 0,

		[RadioReportId("pel_m_040317", InstanceName = nameof(ProstataFindingType.TransitionZoneTZ))]
		FullyEnclosed = 1,

		[RadioReportId("pel_m_040318", InstanceName = nameof(ProstataFindingType.TransitionZoneTZ))]
		PartiallyEncapsulatedMostly = 2,

		[RadioReportId("pel_m_040319", InstanceName = nameof(ProstataFindingType.TransitionZoneTZ))]
		NoCapsule = 3

	}
}
