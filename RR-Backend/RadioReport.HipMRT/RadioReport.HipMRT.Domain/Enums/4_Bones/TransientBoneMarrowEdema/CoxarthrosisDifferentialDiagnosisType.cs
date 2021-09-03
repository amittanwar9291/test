using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum CoxarthrosisDifferentialDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040448", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
        NeoplasticBoneMarrowInfiltration = 1,

		[RadioReportId("hip_m_040449", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
        Inflammationosteomyelitis = 2,

		[RadioReportId("hip_m_040450", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
        StimulatedBoneMarrow = 3
	}
}
