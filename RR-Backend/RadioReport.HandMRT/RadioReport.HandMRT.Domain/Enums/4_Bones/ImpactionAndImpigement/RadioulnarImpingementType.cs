using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum RadioulnarImpingementType : byte
	{
		None = 0,

		[RadioReportId("han_m_0403117", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
		EarlyStage = 1,

		[RadioReportId("han_m_0403120", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
		LateStage = 2

	}
}
