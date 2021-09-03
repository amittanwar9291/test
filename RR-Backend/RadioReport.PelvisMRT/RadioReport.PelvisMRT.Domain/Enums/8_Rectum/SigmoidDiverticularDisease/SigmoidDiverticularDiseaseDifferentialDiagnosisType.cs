using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum SigmoidDiverticularDiseaseDifferentialDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080529", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		SigmoidCarcinoma = 1,

		[RadioReportId("pel_m_080530", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		AutoInflammatoryDiverticulitis = 2,

		[RadioReportId("pel_m_080531", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		AppendagitisEpiploica = 3

	}
}
