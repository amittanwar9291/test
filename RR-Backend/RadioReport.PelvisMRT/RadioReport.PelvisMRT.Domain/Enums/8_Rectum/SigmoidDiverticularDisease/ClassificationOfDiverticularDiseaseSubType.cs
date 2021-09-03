using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum ClassificationOfDiverticularDiseaseSubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080430", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type1a = 1,

		[RadioReportId("pel_m_080431", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type1b = 2,

		[RadioReportId("pel_m_080432", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type2a = 3,

		[RadioReportId("pel_m_080433", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type2b = 4,

		[RadioReportId("pel_m_080434", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type2c = 5,

		[RadioReportId("pel_m_080435", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type3a = 6,

		[RadioReportId("pel_m_080436", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type3b = 7,

		[RadioReportId("pel_m_080437", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type3c = 8
	}
}
