using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum MassOrOsteolysisCorticalBoneType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040260", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Intact = 1,

		[RadioReportId("hip_m_040261", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Thinningscalopping = 2,

		[RadioReportId("hip_m_040262", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Destruction = 3,

		[RadioReportId("hip_m_040263", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Neocorticalisation = 4

	}
}
