using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum TearClassification : byte
    {
        None = 0,

        [RadioReportId("kne_m_050308")]
        HorizontalTear = 1,

        [RadioReportId("kne_m_050309")]
        VerticalTear = 2,

        [RadioReportId("kne_m_050310")]
        RadialTear = 3,

        [RadioReportId("kne_m_050311")]
        ComplexTear = 4
    }
}
