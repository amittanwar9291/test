using RadioReport.Common.Logic.Attributes;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Domain.Enums.CapsuleAndRibbons
{
	public enum RuptureOfCollateralLigamentType : byte
	{
		None = 0,

		[RadioReportId("han_m_050402", InstanceName = nameof(CapsuleAndRibbonsFinding.CollateralLigamentInjuryType), CustomConditionName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
		RuptureOfTheLigamentumUlnareLCU = 1,

		[RadioReportId("han_m_050403", InstanceName = nameof(CapsuleAndRibbonsFinding.CollateralLigamentInjuryType), CustomConditionName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
		RuptureOfTheLigamentumRadialLCR = 2,

		[RadioReportId("han_m_050404", InstanceName = nameof(CapsuleAndRibbonsFinding.CollateralLigamentInjuryType), CustomConditionName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
		IPUlnar = 3,

		[RadioReportId("han_m_050405", InstanceName = nameof(CapsuleAndRibbonsFinding.CollateralLigamentInjuryType), CustomConditionName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
		IPRadial = 4,

		[RadioReportId("han_m_050408", InstanceName = nameof(CapsuleAndRibbonsFinding.RuptureOfCollateralLigamentSideType), CustomConditionName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
		Ulnar = 5,

		[RadioReportId("han_m_050409", InstanceName = nameof(CapsuleAndRibbonsFinding.RuptureOfCollateralLigamentSideType), CustomConditionName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
		Radial = 6

	}
}
