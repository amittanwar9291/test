using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum BandPortion : byte
    {
        None = 0,

        [RadioReportId("kne_m_050329", InstanceName = nameof(RibbonsFindingType.MedialCollateralLigaments))]
        RuptureSuperficialLayer = 1,

        [RadioReportId("kne_m_050330", InstanceName = nameof(RibbonsFindingType.MedialCollateralLigaments))]
        RuptureDeepLayer = 2,
    }
}
