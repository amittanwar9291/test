using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.PelvicFloor
{
    public enum PelvicFloorAreFindings : byte
	{
		None = 0,

        [RadioReportId("pel_m_070104")]
        RegularAnatomy = 1,

        [RadioReportId("pel_m_070105")]
        InAGeneral = 2,

        [RadioReportId("pel_m_070106")]
        Finding = 3
    }
}