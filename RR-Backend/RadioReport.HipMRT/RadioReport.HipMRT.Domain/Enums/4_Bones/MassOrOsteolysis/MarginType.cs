using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum MarginType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040253", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Sharp = 1,

		[RadioReportId("hip_m_040254", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Illdefined = 2,

		[RadioReportId("hip_m_040255", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        MixedForm = 3

	}
}
