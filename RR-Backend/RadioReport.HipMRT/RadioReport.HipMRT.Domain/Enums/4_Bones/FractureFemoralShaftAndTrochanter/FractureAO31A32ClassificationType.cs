using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum FractureAO31A32ClassificationType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040310", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        FemoralShaft = 1,

		[RadioReportId("hip_m_040311", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        TrochantericRegion = 2,

		[RadioReportId("hip_m_040312", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        FemoralShaftNotSpecified = 3,

		[RadioReportId("hip_m_040313", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        TrochantericRegionNotSpecified = 4
	}
}
