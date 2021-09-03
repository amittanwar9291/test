using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.Tendinopathy
{
	public enum InternalStructureType : byte
	{
		None = 0,

		[RadioReportId("han_m_060440", InstanceName = nameof(TendinopathyFindingType.Ganglion))]
        Homogeneous = 1,

		[RadioReportId("han_m_060441", InstanceName = nameof(TendinopathyFindingType.Ganglion))]
        Septated = 2

    }
}
