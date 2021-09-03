using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum RadioulnarSynostosisType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040302", InstanceName = nameof(BonesFindingType.NormalVariantOrAnomaly))]
		CalcaneonavicularCoalition = 1,

		[RadioReportId("anc_m_040303", InstanceName = nameof(BonesFindingType.NormalVariantOrAnomaly))]
		TalocalcanearCoalition = 2

	}
}
