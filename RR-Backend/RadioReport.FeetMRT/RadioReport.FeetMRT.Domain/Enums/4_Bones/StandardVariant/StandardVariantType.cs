using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum StandardVariantType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040203", InstanceName = nameof(BonesFindingType.NormalVariantOrAnomaly))]
		OssaAccessoriaPedis = 1,

		[RadioReportId("anc_m_0403200", InstanceName = nameof(BonesFindingType.NormalVariantOrAnomaly))]
		Coalition = 2

	}
}
