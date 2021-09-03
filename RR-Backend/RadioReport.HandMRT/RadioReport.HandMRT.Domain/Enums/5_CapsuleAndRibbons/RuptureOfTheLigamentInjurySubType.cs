using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.CapsuleAndRibbons
{
    public enum RuptureOfTheLigamentInjurySubType : byte
    {
        None = 0,
        [RadioReportId("han_m_050501", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumUlnareLCU))]
        [RadioReportId("han_m_050506", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumRadialLCR))]
        Strain = 1,

        [RadioReportId("han_m_050502", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumUlnareLCU))]
        [RadioReportId("han_m_050507", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumRadialLCR))]
        PartialRupture = 2,

        [RadioReportId("han_m_050503", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumUlnareLCU))]
        [RadioReportId("han_m_050508", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumRadialLCR))]
        NonDisplacedCompleteRupture = 3,

        [RadioReportId("han_m_050504", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumUlnareLCU))]
        [RadioReportId("han_m_050509", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumRadialLCR))]
        DisplacedCompleteRupture = 4

    }
}
