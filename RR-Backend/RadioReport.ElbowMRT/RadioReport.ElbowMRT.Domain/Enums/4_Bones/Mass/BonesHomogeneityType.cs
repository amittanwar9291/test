using RadioReport.Common.Logic.Attributes;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum BonesHomogeneityType : byte
	{
		None = 0,

        [RadioReportId("elb_m_0402162", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.Mass))]
		[RadioReportId("elb_m_0404162", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.Mass))]
		Homogeneous = 1,

        [RadioReportId("elb_m_0402163", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.Mass))]
		[RadioReportId("elb_m_0404163", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.Mass))]
		Heterogeneous = 2
	}
}
