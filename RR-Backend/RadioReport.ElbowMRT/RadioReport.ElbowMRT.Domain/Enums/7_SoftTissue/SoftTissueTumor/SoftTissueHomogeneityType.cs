using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum SoftTissueHomogeneityType : byte
	{
		None = 0,

        [RadioReportId("elb_m_070406", InstanceName = "HomogeneityType")]
        [RadioReportId("elb_m_070412", InstanceName = "NoContrastEnhancementHomogeneityType")]
		Homogeneous = 1,

        [RadioReportId("elb_m_070407", InstanceName = "HomogeneityType")]
        [RadioReportId("elb_m_070413", InstanceName = "NoContrastEnhancementHomogeneityType")]
		Heterogeneous = 2

	}
}
