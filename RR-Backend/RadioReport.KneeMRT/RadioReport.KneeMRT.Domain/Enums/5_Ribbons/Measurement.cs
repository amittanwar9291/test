using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum Measurement : byte
    {
        None = 0,

        [RadioReportId("kne_m_050505")]
        Axial = 1,

        [RadioReportId("kne_m_050506")]
        Coronal = 2,

        [RadioReportId("kne_m_050507")]
        Sagittal = 3
    }
}
