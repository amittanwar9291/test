using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum CartilageTransplantationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_020313")]
        AutologousMatrixInducedChondrogenesis = 1,

        [RadioReportId("kne_m_020314")]
        AutologousChondrocyteTransplantation = 2
    }
}
