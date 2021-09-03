using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.KneeMRT.Domain.Enums;

namespace RadioReport.KneeMRT.Domain.Models
{
    public class RibbonsFinding : FindingWithImageBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("kne_m_050106")]
        public RibbonsFindingType FindingType { get; set; }

        #region 01 Innenm Deg.

        [RadioReportId("kne_m_050205")]
        public LocalizationGradeClassifications GradeClassification { get; set; }

        [RadioReportId("uni_05_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_05_005")]
        public string PictureNumber { get; set; }

        #region Grade3 selected

        public TearClassification TearClassification { get; set; }

        [RadioReportId("kne_m_050313")]
        public bool IsSuperiorArticularSurface { get; set; }

        [RadioReportId("kne_m_050314")]
        public bool IsInferiorArticularSurface { get; set; }

        public Dislocation Dislocation { get; set; }
        public FlapTearType FlapTearType { get; set; }
        public BucketHandleTear BucketHandleTear { get; set; }

        #endregion

        [RadioReportId("kne_m_050402")]
        public bool IsChondropathyAssociated { get; set; }

        [RadioReportId("kne_m_050403")]
        public bool IsChondropathyTibial { get; set; }

        [RadioReportId("kne_m_050404")]
        public bool IsChondropathyFemoral { get; set; }

        [RadioReportId("kne_m_050405")]
        public bool IsCMOedemaSubchondralAssociated { get; set; }

        [RadioReportId("kne_m_050406")]
        public bool IsCMOedemaTibial { get; set; }

        [RadioReportId("kne_m_050407")]
        public bool IsCMOedemaFemoral { get; set; }

        [RadioReportId("kne_m_050408")]
        public bool IsSubchondralSclerosisAssociated { get; set; }

        [RadioReportId("kne_m_050409")]
        public bool IsSubchondralTibial { get; set; }

        [RadioReportId("kne_m_050410")]
        public bool IsSubchondralFemoral { get; set; }

        [RadioReportId("kne_m_050411")]
        public bool IsMeniscalExtrusionSubluxation { get; set; }

        [RadioReportId("kne_m_0505100")]
        public bool IsDegenerationRearAttachment { get; set; }

        [RadioReportId("kne_m_050501")]
        public bool IsMeniscalCyst { get; set; }

        [RadioReportId("kne_m_050503")]
        public int? MeniscusDiameterMM { get; set; }

        public Measurement Measurement { get; set; }

        [RadioReportId("kne_m_050508")]
        public bool IsMeniscocapsularSeparation { get; set; }

        [RadioReportId("kne_m_050510")]
        public bool IsLigmeniskotibial { get; set; }

        [RadioReportId("kne_m_050511")]
        public bool IsMeniscofemoralFascicle { get; set; }

        #endregion

        #region 01 Innenm. Var.

        [RadioReportId("kne_m_050207")]
        public bool IsDiscoidMeniscus { get; set; }

        public DiscoidMeniscusType DiscoidMeniscusType { get; set; }

        [RadioReportId("kne_m_050212")]
        public bool IsDislocated { get; set; }

        [RadioReportId("kne_m_050213")]
        public bool IsThickeningLigMeniscofemoralPosterius { get; set; }

        [RadioReportId("kne_m_050322")]
        public bool IsParsIntermediaWavyRepresentation { get; set; }

        [RadioReportId("kne_m_050323")]
        public bool IsPhysiologicalT2Hyperintensity { get; set; }

        [RadioReportId("kne_m_050203", InstanceName = nameof(RibbonsFindingType.InnerMeniscusDegeneration))]
        [RadioReportId("kne_m_050203", InstanceName = nameof(RibbonsFindingType.OuterMeniscusDegeneration))]
        [RadioReportId("kne_m_050325", InstanceName = nameof(RibbonsFindingType.InnerMeniscusVarian))]
        [RadioReportId("kne_m_050325", InstanceName = nameof(RibbonsFindingType.OuterMeniscusVariant))]
        public MeniscusSurgeryLocations MeniscusLocalization1 { get; set; }

        [RadioReportId("kne_m_050415")]
        public MeniscusSurgeryLocations MeniscusLocalization2 { get; set; }

        [RadioReportId("kne_m_050413")]
        public bool IsMeniscalOssile { get; set; }

        [RadioReportId("kne_m_050512")]
        public bool IsAbsentMeniscus { get; set; }

        [RadioReportId("kne_m_050513")]
        public bool IsSignificantVolumeDeclineIM { get; set; }

        #endregion

        #region 01 Outer Meniscus Degeneration

        [RadioReportId("kne_m_050514", InstanceName = nameof(RibbonsFindingType.OuterMeniscusDegeneration))]
        public bool IsMeniscPosterLigamWrisberg { get; set; }

        [RadioReportId("kne_m_050515", InstanceName = nameof(RibbonsFindingType.OuterMeniscusDegeneration))]
        public bool IsMeniscAnteriusLigamHumphry { get; set; }

        [RadioReportId("kne_m_050516", InstanceName = nameof(RibbonsFindingType.OuterMeniscusDegeneration))]
        public bool MeniscotibialLigamentum { get; set; }

        #endregion

        #region 01 Outer Meniscus Variant

        [RadioReportId("kne_m_050517", InstanceName = nameof(RibbonsFindingType.OuterMeniscusVariant))]
        public bool IsSignificantVolumeDeclineEM { get; set; }

        #endregion

        #region 01 Kollateralbander medial

        [RadioReportId("kne_m_050327", InstanceName = nameof(RibbonsFindingType.MedialCollateralLigaments))]
        public bool IsBursitisBetweenDeepAndMidLayers { get; set; }

        public BandPortion BandPortion { get; set; }

        #region Bursitis

        [RadioReportId("kne_m_050342", InstanceName = nameof(RibbonsFindingType.MedialCollateralLigaments))]
        public bool IsDistortionGrade1Injury { get; set; }

        #endregion

        #endregion

        #region Kollateralbänder lateral 

        [RadioReportId("kne_m_050344", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        public bool IsLateralCollateralLigament { get; set; }

        [RadioReportId("kne_m_050345", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        public bool IsTractusIliotibialis { get; set; }

        [RadioReportId("kne_m_050346", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        public bool IsBicepsFemorisTendon { get; set; }

        [RadioReportId("kne_m_050347", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        public bool IsLiggPopliteofibulare { get; set; }

        [RadioReportId("kne_m_050348", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        public bool IsLigMeniscopliteale { get; set; }

        #endregion

        #region Kollateralbander medial + lateral

        public Detail Detail { get; set; }

        public DetailLocalization DetailLocalization { get; set; }

        [RadioReportId("kne_m_050338", InstanceName = nameof(RibbonsFindingType.MedialCollateralLigaments), CustomConditionName = nameof(Detail.CompleteRuptureGradeThreeInjury))]
        [RadioReportId("kne_m_050334", InstanceName = nameof(RibbonsFindingType.MedialCollateralLigaments), CustomConditionName = nameof(Detail.PartialTearGradeTwoInjury))]
        [RadioReportId("kne_m_050356", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments), CustomConditionName = nameof(Detail.CompleteRuptureGradeThreeInjury))]
        [RadioReportId("kne_m_050352", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments), CustomConditionName = nameof(Detail.PartialTearGradeTwoInjury))]
        public bool IsRetracted { get; set; }

        [RadioReportId("kne_m_0503102")]
        public byte? DimensionGrad2 { get; set; }

        [RadioReportId("kne_m_050339", InstanceName = nameof(RibbonsFindingType.MedialCollateralLigaments))]
        [RadioReportId("kne_m_050357", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        public byte? DimensionGrad3 { get; set; }

        #endregion

        #region Kollateralbander lateral + HKB + VKB

        [RadioReportId("kne_m_050359", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        [RadioReportId("kne_m_050422", InstanceName = nameof(RibbonsFindingType.AnteriorCruciateLigamentACL))]
        public bool IsSegondFracture { get; set; }

        [RadioReportId("kne_m_050360", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        [RadioReportId("kne_m_050423", InstanceName = nameof(RibbonsFindingType.AnteriorCruciateLigamentACL))]
        public bool IsAvulsionTibia { get; set; }

        [RadioReportId("kne_m_050361", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        [RadioReportId("kne_m_050424", InstanceName = nameof(RibbonsFindingType.AnteriorCruciateLigamentACL))]
        public bool IsRuptureOfAnteriorCruciateLigament { get; set; }

        [RadioReportId("kne_m_050362", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        [RadioReportId("kne_m_050417", InstanceName = nameof(RibbonsFindingType.AnteriorCruciateLigamentACL))]
        [RadioReportId("kne_m_050394", InstanceName = nameof(RibbonsFindingType.PosteriorCruciateLigamentPCL))]
        public bool IsArcuateSign { get; set; }

        [RadioReportId("kne_m_050363", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        [RadioReportId("kne_m_050395", InstanceName = nameof(RibbonsFindingType.PosteriorCruciateLigamentPCL))]
        public bool IsAvulsionFrakturFibula { get; set; }

        [RadioReportId("kne_m_050364", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        [RadioReportId("kne_m_050419", InstanceName = nameof(RibbonsFindingType.AnteriorCruciateLigamentACL))]
        [RadioReportId("kne_m_050396", InstanceName = nameof(RibbonsFindingType.PosteriorCruciateLigamentPCL))]
        public bool IsPullOutPosterolateralCapsule { get; set; }

        [RadioReportId("kne_m_050365", InstanceName = nameof(RibbonsFindingType.LateralCollateralLigaments))]
        [RadioReportId("kne_m_050420", InstanceName = nameof(RibbonsFindingType.AnteriorCruciateLigamentACL))]
        public bool IsPosteriorCruciateLigament { get; set; }

        #endregion

        #region Vorderes Kreuzband (VKB)

        public InjuryType InjuryType { get; set; }
        public InjuryKind RuptureKind { get; set; }

        [RadioReportId("kne_m_050367")]
        public bool IsFreshTotalSignalIncreased { get; set; }

        [RadioReportId("kne_m_050368")]
        public bool IsFreshTotalThickening { get; set; }

        [RadioReportId("kne_m_050369")]
        public bool IsFreshTotalContusionOrBoneMarrowEdema { get; set; }

        [RadioReportId("kne_m_050376")]
        public bool IsFreshTotalLatFemoralCondyleVentral { get; set; }

        [RadioReportId("kne_m_050377")]
        public bool IsFreshTotalAnterolateralTibialPlateauDorsal { get; set; }

        [RadioReportId("kne_m_050378")]
        public bool IsFreshTotalBonyAvulsion { get; set; }

        [RadioReportId("kne_m_050379")]
        public bool IsFreshTotalFracture { get; set; }

        [RadioReportId("kne_m_050381")]
        public bool IsFreshTotalFrakturLatFemoralCondyleVentral { get; set; }

        [RadioReportId("kne_m_050382")]
        public bool IsFreshTotalFrakturLatTibialPlateauDorsal { get; set; }

        [RadioReportId("kne_m_050384")]
        public bool IsTibialEminence { get; set; }

        [RadioReportId("kne_m_050416")]
        public bool IsFreshTotalProximaleFibula { get; set; }

        [RadioReportId("kne_m_050421")]
        public bool IsFreshTotalLateralTibialPlateau { get; set; }

        [RadioReportId("kne_m_050425")]
        public bool IsFreshTotalSubluxationTibiaAnteriorOver5mm { get; set; }

        [RadioReportId("kne_m_050426")]
        public bool IsBucklingOfThePCL { get; set; }

        public BundleType BundleType { get; set; }

        [RadioReportId("kne_m_050418")]
        public bool IsAvulsionFibula { get; set; }

        #endregion

        #region Hinteres Kreuzband (HKB)

        [RadioReportId("kne_m_050370")]
        public bool IsFreshTotalLatFemoralCondyle { get; set; }

        [RadioReportId("kne_m_050371")]
        public bool IsFreshTotalAnterolateralTibialPlateau { get; set; }

        [RadioReportId("kne_m_050393")]
        public bool IsFreshTotalProximaleFibula1 { get; set; }

        [RadioReportId("kne_m_050397")]
        public bool IsFreshTotalLateralTibialPlateau1 { get; set; }

        [RadioReportId("kne_m_050398")]
        public bool IsFreshTotalMedialTibialPlateau { get; set; }

        // Partialruptur
        [RadioReportId("kne_m_050435")]
        public bool IsFreshPartialThickening { get; set; }

        [RadioReportId("kne_m_050436")]
        public bool IsFreshPartialSignalIncrease { get; set; }

        [RadioReportId("kne_m_050440")]
        public bool IsFreshPartialMiddleThird { get; set; }

        [RadioReportId("kne_m_050441")]
        public bool IsFreshPartialroximalThird { get; set; }

        [RadioReportId("kne_m_050442")]
        public bool IsFreshPartialDistalThird { get; set; }

        #endregion

        #region HKB + VKB

        [RadioReportId("kne_m_050522", InstanceName = nameof(RibbonsFindingType.AnteriorCruciateLigamentACL))]
        [RadioReportId("kne_m_050438", InstanceName = nameof(RibbonsFindingType.PosteriorCruciateLigamentPCL))]
        public bool IsFreshPartialPoplitealTendonRupture { get; set; }

        [RadioReportId("kne_m_050387")]
        public bool IsChronicSignalIncreased { get; set; }

        [RadioReportId("kne_m_050388")]
        public bool IsChronicThickening { get; set; }

        [RadioReportId("kne_m_050389")]
        public bool IsChronicSynovialization { get; set; }

        [RadioReportId("kne_m_050390")]
        public bool IsChronicGanglionCyst { get; set; }

        [RadioReportId("kne_m_050391")]
        public int? ChronicDimensionMM { get; set; } //max 99, min 00

        public TransplantDetail TransplantDetail { get; set; }

        [RadioReportId("kne_m_050431")]
        public bool IsTunnelCyst { get; set; }

        [RadioReportId("kne_m_050432")]
        public bool IsTunnelCystTibial { get; set; }

        [RadioReportId("kne_m_050433")]
        public bool IsTunnelCystFemoral { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(Detail.CompleteRuptureGradeThreeInjury) => Detail == Detail.CompleteRuptureGradeThreeInjury,
                nameof(Detail.PartialTearGradeTwoInjury) => Detail == Detail.PartialTearGradeTwoInjury,
                _ => false
            };

        #region IMAGE FILE UPLOAD 
        
        [RadioReportId("uni_05_007l", InstanceName = "KneeMRT.RibbonsFinding", IsExportable = false)]
        public override ImageFile UploadedImageFile { get; set; }

        #endregion
    }
}
