using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum CartilageDistributionType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040232", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Focal = 1,

		[RadioReportId("hip_m_040233", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Diffuse = 2
	}
}
