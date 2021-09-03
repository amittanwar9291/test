using RadioReport.Common.Logic.Attributes;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum BonesHomogeneityType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0402211", InstanceName = nameof(BonesFinding.HomogeneityType))]
		[RadioReportId("anc_m_0404220", InstanceName = nameof(BonesFinding.NoCaEnhancementHomogeneityType))]
		Homogeneous = 1,

		[RadioReportId("anc_m_0402212", InstanceName = nameof(BonesFinding.HomogeneityType))]
		[RadioReportId("anc_m_0404221", InstanceName = nameof(BonesFinding.NoCaEnhancementHomogeneityType))]
		Heterogeneous = 2
	}
}
