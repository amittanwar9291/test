using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.HandMRT.Domain.Enums.CapsuleAndRibbons;


namespace RadioReport.HandMRT.Domain.Models
{
	public class CapsuleAndRibbonsFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

		[RadioReportId("han_m_050106")]
		public CapsuleAndRibbonsFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("han_m_050239", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
        [RadioReportId("han_m_050240", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
        public bool IsSuspicionOf { get; set; }

        #endregion

        #region RuptureOfTheLigScapholunatum & RuptureOfTheLigLunotriquetrum

        [RadioReportId("han_m_050203", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigScapholunatum))]
        [RadioReportId("han_m_050203", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigLunotriquetrum))]
        public bool IsDorsal { get; set; }

		[RadioReportId("han_m_050204", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigScapholunatum))]
        [RadioReportId("han_m_050204", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigLunotriquetrum))]
        public bool IsCentrally { get; set; }

		[RadioReportId("han_m_050205", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigScapholunatum))]
        [RadioReportId("han_m_050205", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigLunotriquetrum))]
        public bool IsPalmar { get; set; }

		[RadioReportId("han_m_050206", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigScapholunatum))]
		public bool IsStaticSlDissociation { get; set; }

        public LesionOfExtrinsicLigamentsType LesionOfExtrinsicLigamentsType { get; set; }

        [RadioReportId("han_m_050207", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigScapholunatum))]
		public bool IsSecondaryArthrosis { get; set; }

        public SlacWristType SlacWristType { get; set; }

        [RadioReportId("han_m_050208", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigScapholunatum))]
        [RadioReportId("han_m_050230", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigLunotriquetrum))]
        public bool IsDISIDeformity { get; set; }

        #endregion

        #region RuptureOfExtrinsicLigaments

        public DorsalType DorsalType { get; set; }

        public PalmarType PalmarType { get; set; }

        #endregion

        #region TFCCLesion
        public ClassificationPalmerType ClassificationPalmerType { get; set; }

		public ClassificationPalmerSubType ClassificationPalmerSubType { get; set; }

		#endregion

		#region BandLesionsOfTheFingers
		public LocalizationType LocalizationType { get; set; }

        [RadioReportId("han_m_050312", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050323", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        public bool IsAnnularPulleyRupture  { get; set; }

        [RadioReportId("han_m_050316", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050329", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        public bool IsTenosynovitisStenosans { get; set; }

        [RadioReportId("han_m_050320", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050414", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        public bool IsRuptureOfTheExtensorTendon { get; set; }

        [RadioReportId("han_m_050321", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(LocalizationType.D1))]
        [RadioReportId("han_m_050415", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = "Not" + nameof(LocalizationType.D1))]
        public bool IsAvulsionFracture  { get; set; }

        [RadioReportId("han_m_050312-l", InstanceName = nameof(AnnularPulleyRupturType), IsExportable = false)]
        public PathologySubType AnnularPulleyRupturType { get; set; }

        [RadioReportId("han_m_050316-l", InstanceName = nameof(TenosynovitisStenosansType), IsExportable = false)]
        public PathologySubType TenosynovitisStenosansType { get; set; }

        [RadioReportId("han_m_050406", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
        public bool IsRuptureOfCollateralLigament { get; set; }

        [RadioReportId("han_m_050411", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
        public bool IsMcp { get; set; }

        [RadioReportId("han_m_050412", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
        public bool IsPip { get; set; }

        [RadioReportId("han_m_050413", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
        public bool IsDip { get; set; }

        [RadioReportId("han_m_050401-l", InstanceName = nameof(CollateralLigamentInjuryType), IsExportable = false)]
        public RuptureOfCollateralLigamentType CollateralLigamentInjuryType { get; set; }

        [RadioReportId("an_m_050406-l", InstanceName = nameof(RuptureOfCollateralLigamentSideType), IsExportable = false)]
        public RuptureOfCollateralLigamentType RuptureOfCollateralLigamentSideType { get; set; }

        public RuptureOfTheLigamentInjurySubType RuptureOfTheLigamentInjurySubType { get; set; }

        [RadioReportId("han_m_050505", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumUlnareLCU))]
        [RadioReportId("han_m_050510", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers), CustomConditionName = nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumRadialLCR))]
        public bool IsAvulsionInjury { get; set; }
        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(LocalizationType.D1) => LocalizationType.ToString() == customConditionId,
               "Not" + nameof(LocalizationType.D1) => LocalizationType == LocalizationType.D2 || LocalizationType == LocalizationType.D3 || LocalizationType == LocalizationType.D4 || LocalizationType == LocalizationType.D5,
                nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers) => FindingType.ToString() == customConditionId,
                nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumUlnareLCU) => CollateralLigamentInjuryType.ToString() == customConditionId,
                nameof(RuptureOfCollateralLigamentType.RuptureOfTheLigamentumRadialLCR) => CollateralLigamentInjuryType.ToString() == customConditionId,
                _ => false
            };

    }
}
