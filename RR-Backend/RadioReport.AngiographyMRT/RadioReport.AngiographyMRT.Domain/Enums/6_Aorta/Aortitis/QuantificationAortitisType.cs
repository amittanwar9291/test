using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Aorta
{
	public enum QuantificationAortitisType : byte
	{
		None = 0,

		[RadioReportId("ang_m_060437", InstanceName = nameof(AortaFindingType.Aortitis))]
        SingleLesion = 1,

		[RadioReportId("ang_m_060438", InstanceName = nameof(AortaFindingType.Aortitis))]
        SevereMultipleLesions = 2
	}
}
