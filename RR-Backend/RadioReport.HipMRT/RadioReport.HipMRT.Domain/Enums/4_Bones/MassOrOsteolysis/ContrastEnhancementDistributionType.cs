using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum ContrastEnhancementDistributionType : byte
	{
		None = 0,

		[RadioReportId("hip_m_0404103", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Peripheral = 1,

		[RadioReportId("hip_m_0404104", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Central = 2,

		[RadioReportId("hip_m_0404105", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        EntireLesion = 3,

		[RadioReportId("hip_m_0404106", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Septal = 4,

		[RadioReportId("hip_m_0404107", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        InNidus = 5

	}
}
