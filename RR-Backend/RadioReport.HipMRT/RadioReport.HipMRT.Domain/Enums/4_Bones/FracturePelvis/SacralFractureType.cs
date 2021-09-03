using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum SacralFractureType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040590", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        DSymphysisDisruption = 1,

		[RadioReportId("hip_m_040591", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        HIliacWingFracture = 2
	}
}
