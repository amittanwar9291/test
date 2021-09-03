using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum ComplicationsFistulaType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080522", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        Bladder = 1,

		[RadioReportId("pel_m_080523", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        Intestine = 2,

		[RadioReportId("pel_m_080524", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Uterus = 3

	}
}
