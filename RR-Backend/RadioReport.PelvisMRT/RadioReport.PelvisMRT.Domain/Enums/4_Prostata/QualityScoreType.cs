using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{

    public enum QualityScoreType : byte
    {
        None = 0,

        [RadioReportId("pel_m_040203")]
        VeryGood = 1,

        [RadioReportId("pel_m_040204")]
        Good = 2,

        [RadioReportId("pel_m_040205")]
        Satisfactory = 3,

        [RadioReportId("pel_m_040206")]
        Sufficient = 4,

        [RadioReportId("pel_m_040207")]
        Defective = 5,

        [RadioReportId("pel_m_040208")]
        Unsatisfactory = 6

    }
}