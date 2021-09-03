using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum DetailLocalization : byte
    {
        None = 0,

        [RadioReportId("kne_m_050336", InstanceName = nameof(RibbonsFindingType.MedialCollateralLigaments), CustomConditionName = nameof(Detail.CompleteRuptureGradeThreeInjury))]
        [RadioReportId("kne_m_050332", InstanceName = nameof(RibbonsFindingType.MedialCollateralLigaments), CustomConditionName = nameof(Detail.PartialTearGradeTwoInjury))]
        [RadioReportId("kne_m_050354", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments), CustomConditionName = nameof(Detail.CompleteRuptureGradeThreeInjury))]
        [RadioReportId("kne_m_050350", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments), CustomConditionName = nameof(Detail.PartialTearGradeTwoInjury))]
        Proximal = 1,

        [RadioReportId("kne_m_050337", InstanceName = nameof(RibbonsFindingType.MedialCollateralLigaments), CustomConditionName = nameof(Detail.CompleteRuptureGradeThreeInjury))]
        [RadioReportId("kne_m_050333", InstanceName = nameof(RibbonsFindingType.MedialCollateralLigaments), CustomConditionName = nameof(Detail.PartialTearGradeTwoInjury))]
        [RadioReportId("kne_m_050355", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments), CustomConditionName = nameof(Detail.CompleteRuptureGradeThreeInjury))]
        [RadioReportId("kne_m_050351", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments), CustomConditionName = nameof(Detail.PartialTearGradeTwoInjury))]
        Distal = 2
    }

}
