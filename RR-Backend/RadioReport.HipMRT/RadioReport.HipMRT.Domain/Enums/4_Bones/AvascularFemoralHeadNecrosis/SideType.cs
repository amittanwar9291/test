using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum SideType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040211", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        [RadioReportId("hip_m_040221", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Right = 1,

		[RadioReportId("hip_m_040212", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        [RadioReportId("hip_m_040222", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Left = 2
	}
}
