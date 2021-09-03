using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.Tendinopathy
{
	public enum TendonInvolvementType : byte
	{
		None = 0,

		[RadioReportId("han_m_060317", InstanceName = nameof(TendinopathyFindingType.Ganglion))]
        Intratendinous = 1,

		[RadioReportId("han_m_060318", InstanceName = nameof(TendinopathyFindingType.Ganglion))]
        Peritendinous = 2

	}
}
