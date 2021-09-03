using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum ClassificationOfDiverticularDiseaseType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080334", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type1 = 2,

		[RadioReportId("pel_m_080335", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type2 = 3,

		[RadioReportId("pel_m_080336", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type3 = 4,

		[RadioReportId("pel_m_0803176", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Type4 = 5
	}
}
