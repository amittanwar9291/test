using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum ImpactionImpingementSyndromeType : byte
	{
		None = 0,

		[RadioReportId("han_m_040235", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
		UlnocarpalImpactionSyndrome = 1,

		[RadioReportId("han_m_040236", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
		RadioulnarImpingement = 2

	}
}
