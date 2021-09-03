using RadioReport.Common.Logic.Attributes;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum HomogeneityType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070406", InstanceName = nameof(SoftTissueFinding.MainHomogeneityType))]
		[RadioReportId("elb_m_070412", InstanceName = nameof(SoftTissueFinding.CAEnhancementHomogeneityType))]
		Homogeneous = 1,

		[RadioReportId("elb_m_070407", InstanceName = nameof(SoftTissueFinding.MainHomogeneityType))]
		[RadioReportId("elb_m_070413", InstanceName = nameof(SoftTissueFinding.CAEnhancementHomogeneityType))]
		Heterogeneous = 2

	}
}
