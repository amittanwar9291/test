using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum ContrastEnhancementQuantitativeType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040497", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        No = 1,

		[RadioReportId("hip_m_040498", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Mild = 2,

		[RadioReportId("hip_m_040499", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Pronounced = 3

	}
}
