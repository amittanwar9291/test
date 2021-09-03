using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum FractureSpecificationType : byte
	{
		None = 0,

        [RadioReportId("hip_m_040314", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        [RadioReportId("hip_m_040319", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        [RadioReportId("hip_m_040324", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        [RadioReportId("hip_m_040331", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        [RadioReportId("hip_m_040338", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        FractureOlderConsolidated = 1,

        [RadioReportId("hip_m_040315", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        [RadioReportId("hip_m_040320", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        [RadioReportId("hip_m_040325", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        [RadioReportId("hip_m_040332", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        [RadioReportId("hip_m_040339", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        SuspicionOn = 2
    }
}
