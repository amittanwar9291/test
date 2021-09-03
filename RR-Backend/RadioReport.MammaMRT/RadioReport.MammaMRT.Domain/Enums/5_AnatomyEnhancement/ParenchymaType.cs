using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum ParenchymaType : byte
    {
        None = 0,

        [RadioReportId("mam_m_050112")]
        UnremarkableInT1wAndT2w = 1,

        [RadioReportId("mam_m_050113")]
        OnT2wSmallestBilateralCystsWithDiameterLess5Mm = 2,

        [RadioReportId("mam_m_050114")]
        OnT2wSeveralTypicalCystsWithDiameterLess10mm = 3,

        [RadioReportId("mam_m_050115")]
        FindingsCompatibleWithFibrousCysticMastopathy = 4
    }
}
