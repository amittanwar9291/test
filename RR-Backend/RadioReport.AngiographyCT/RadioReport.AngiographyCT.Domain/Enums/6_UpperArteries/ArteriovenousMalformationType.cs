using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.UpperArteries
{
	public enum ArteriovenousMalformationType : byte
	{
		None = 0,

		[RadioReportId("ang_c_060433")]
        HighFlowLesion = 1,

        [RadioReportId("ang_c_060434")]
        LowFlowLesion = 2
	}
}
