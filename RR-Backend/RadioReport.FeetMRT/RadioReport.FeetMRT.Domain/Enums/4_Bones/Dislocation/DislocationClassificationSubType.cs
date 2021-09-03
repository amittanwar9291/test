using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum DislocationClassificationSubType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040476", InstanceName = nameof(BonesFindingType.Dislocation))]
		TypeATotalIncongruity = 1,

		[RadioReportId("anc_m_040477", InstanceName = nameof(BonesFindingType.Dislocation))]
		TypeBPartialIncongruity = 2,

		[RadioReportId("anc_m_040478", InstanceName = nameof(BonesFindingType.Dislocation))]
		TypeCdivergent = 3
    }
}
