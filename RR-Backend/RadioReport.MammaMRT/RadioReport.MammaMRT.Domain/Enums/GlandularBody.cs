using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public  enum GlandularBody:byte
    {
        None = 0,

        [RadioReportId("mam_m_050107")]
        AlmostEntirelyFat = 1,

        [RadioReportId("mam_m_050108")]
        ScatteredFibroglandularTissue = 2,

        [RadioReportId("mam_m_050109")]
        HeterogeneousFibroglandularTissue = 3,

        [RadioReportId("mam_m_050110")]
        ExtremeFibroglandularTissue = 4
    }
}
