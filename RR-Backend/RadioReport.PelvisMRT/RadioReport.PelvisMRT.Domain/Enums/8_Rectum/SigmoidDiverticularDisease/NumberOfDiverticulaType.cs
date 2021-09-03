using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum NumberOfDiverticulaType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080236", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        MultipleDiverticula = 1,

		[RadioReportId("pel_m_080237", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		SingleDiverticula = 2
	}
}
