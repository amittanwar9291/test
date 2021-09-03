using RadioReport.Common.Logic.Attributes;
using RadioReport.HipMRT.Domain.Models.Bones;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum HomogeneityType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040257", InstanceName = nameof(BonesFinding.HomogeneityType))]
		[RadioReportId("hip_m_0404100", InstanceName = nameof(BonesFinding.PronouncedHomogeneityType))]
        Homogeneous = 1,

		[RadioReportId("hip_m_040258", InstanceName = nameof(BonesFinding.HomogeneityType))]
        [RadioReportId("hip_m_0404101", InstanceName = nameof(BonesFinding.PronouncedHomogeneityType))]
        Heterogeneous = 2
	}
}
