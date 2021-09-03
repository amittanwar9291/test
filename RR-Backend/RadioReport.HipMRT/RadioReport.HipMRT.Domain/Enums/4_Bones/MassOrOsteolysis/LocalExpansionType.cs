using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum LocalExpansionType : byte
	{
		None = 0,

		[RadioReportId("hip_m_0405136", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Intracompartmental = 1,

		[RadioReportId("hip_m_0405137", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        Extracompartmental = 2

	}
}
