using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.Tendinopathy
{
	public enum RuptureType : byte
	{
		None = 0,

        [RadioReportId("han_m_060412", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060428", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        PartialRupture = 1,

        [RadioReportId("han_m_060413", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060429", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        CompleteRupture = 2

    }
}
