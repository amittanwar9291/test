using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum UlnocarpalEtiologyType : byte
	{
		None = 0,

		[RadioReportId("han_m_040465", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
		UlnocarpalImpactionSyndrome = 1,

		[RadioReportId("han_m_040466", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
		RadioulnarImpingement = 2
	}
}
