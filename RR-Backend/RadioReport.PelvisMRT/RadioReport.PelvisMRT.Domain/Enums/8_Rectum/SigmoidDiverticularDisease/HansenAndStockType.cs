using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum HansenAndStockType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080246", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Stage1 = 2,

		[RadioReportId("pel_m_080247", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Stage2 = 3,

		[RadioReportId("pel_m_080248", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Stage2a = 4,

		[RadioReportId("pel_m_080249", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Stage2b = 5,

		[RadioReportId("pel_m_080250", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Stage2c = 6,

		[RadioReportId("pel_m_080251", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Stage3 = 7

	}
}
