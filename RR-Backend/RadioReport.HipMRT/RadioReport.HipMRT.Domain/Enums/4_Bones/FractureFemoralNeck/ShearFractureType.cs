using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum ShearFractureType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040531", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        PPauwelsAngle = 1,

		[RadioReportId("hip_m_040532", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        QPauwelsAngle = 2,

		[RadioReportId("hip_m_040533", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        RPauwelsAngle = 3
	}
}
