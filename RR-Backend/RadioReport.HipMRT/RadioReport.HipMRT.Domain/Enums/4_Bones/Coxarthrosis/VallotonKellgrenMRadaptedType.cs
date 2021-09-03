using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum VallotonKellgrenMRadaptedType : byte
	{
		None = 0,

		[RadioReportId("hip_m_0405104", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Grade1 = 1,

		[RadioReportId("hip_m_0405105", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Grade2 = 2,

		[RadioReportId("hip_m_0405106", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Grade3 = 3,

		[RadioReportId("hip_m_0405107", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Grade4 = 4
	}
}
