using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum QuantificationAortitisType : byte
	{
		None = 0,

		[RadioReportId("ang_c_070437", InstanceName = nameof(AortaFindingType.Aortitis))]
		SingleLesion = 1,

		[RadioReportId("ang_c_070438", InstanceName = nameof(AortaFindingType.Aortitis))]
		SevereMultipleLesions = 2
	}
}