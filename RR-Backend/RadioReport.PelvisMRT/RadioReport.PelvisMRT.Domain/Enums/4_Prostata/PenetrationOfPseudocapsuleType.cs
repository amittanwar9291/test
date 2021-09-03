using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum PenetrationOfPseudocapsuleType : byte
	{
		None = 0,

        [RadioReportId("pel_m_040323")]
        BroadBasedPseudocapsuleContactMoreThan10Mm = 1,

        [RadioReportId("pel_m_040324")]
        RectoprostaticAngleObliteration = 2,

        [RadioReportId("pel_m_040325")]
        PseudocapsularBulging = 3,

        [RadioReportId("pel_m_040327")]
        InfiltrationOfAdjacentStructures = 4
    }
}
