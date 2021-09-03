using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum AbscessMaximumDiameterType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080425", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Micro = 1,

		[RadioReportId("pel_m_080426", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Macro = 2
	}
}
