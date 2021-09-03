using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Enums;
using RadioReport.NeckMRT.Domain.Enums.SoftTissues;
using RadioReport.NeckMRT.Domain.Enums.SoftTissues.Cysts;
using RadioReport.NeckMRT.Domain.Enums.SoftTissues.MassInflammation;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class SoftTissuesFinding : FindingWithImageBase
    {
        [RadioReportId("nec_m_060106")]
        public SoftTissuesFindingType FindingType { get; set; }

        public override string InstanceName => FindingType.ToString();
        
        #region Common
        
        [RadioReportId("nec_m_060413", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        [RadioReportId("nec_m_060503", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        [RadioReportId("nec_m_060458", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsSubordinate { get; set; }
        
        #endregion
        
        #region ImageFileUpload
            
        [RadioReportId("uni_06_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_06_005")]
        public string PictureNumber { get; set; }

        [RadioReportId("uni_06_007", InstanceName = "NeckMRT.SoftTissues.SoftTissuesFinding", IsExportable = false)]
        public override ImageFile UploadedImageFile { get; set; }
        
        #endregion
        
        #region Cysts
 
        public CharacterizationCystType CharacterizationCystType { get; set; }
        
        // MNC - Median Neck Cyst
        [RadioReportId("nec_m_060302", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsMNCThickeningOfTheCystWall { get; set; }
        
        [RadioReportId("nec_m_060303", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsMNCStreakySignalEnhancementFatSaturatedT2wSequence { get; set; }
        
        [RadioReportId("nec_m_060304", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsMNCStreakyContrastEnhancementPerifocal { get; set; }
        
        [RadioReportId("nec_m_060306", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsCutaneousFistula { get; set; }
        
        public SideType SideType { get; set; }
        
        public LocalizationType LocalizationType { get; set; }
        
        public PeriauricularType PeriauricularType { get; set; }
        
        public AnterolateralType AnterolateralType { get; set; }
        
        public LateralNeckCystType LateralNeckCystType { get; set; }
        
        // LNC - LateralNeckCyst
        [RadioReportId("nec_m_060407", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsLNCThickeningOfTheCystWall { get; set; }
        
        [RadioReportId("nec_m_060408", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsLNCStreakySignalEnhancementFatSaturatedT2wSequence { get; set; }
        
        [RadioReportId("nec_m_060409", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsLNCStreakyContrastEnhancementPerifocal { get; set; }
        
        [RadioReportId("nec_m_060410", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsSuppurativeThyroiditis { get; set; }
        
        [RadioReportId("nec_m_060502", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public LNCDifferentialDiagnosis LNCDifferentialDiagnosis { get; set; }
       
        // TC - TornwaldtCyst
        [RadioReportId("nec_m_060313", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsMedianToThePosteriorWallOfTheNasopharynx { get; set; }

        [RadioReportId("nec_m_060315", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsTCThickeningOfTheCystWall { get; set; }
        
        [RadioReportId("nec_m_060316", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsTCStreakySignalEnhancementFatSaturatedT2wSequence { get; set; }
        
        [RadioReportId("nec_m_060317", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public bool IsTCStreakyContrastEnhancementPerifocal { get; set; }
        
        [RadioReportId("nec_m_060412", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        public TCDifferentialDiagnosis TCDifferentialDiagnosis { get; set; }
        
        [RadioReportId("nec_m_060503", InstanceName = nameof(SoftTissuesFindingType.Cysts), CustomConditionName = nameof(CharacterizationCystType.LateralNeckCyst))]
        [RadioReportId("nec_m_060413", InstanceName = nameof(SoftTissuesFindingType.Cysts), CustomConditionName = nameof(CharacterizationCystType.TornwaldtCyst))]
        public bool IsCystSubordinate { get; set; } // TODO JBo: the rr-ids above are duplicate - do we need this property?
        
        #endregion

        #region MassInflammation
        
        public DescriptionType DescriptionType { get; set; }
        
        [RadioReportId("nec_m_060208", InstanceName = nameof(SoftTissuesFindingType.MassInflammation), AlternativeTranslationSuffix="v2")]
        public DifferentialDiagnosisType CharacterizationIDifferentialDiagnosis { get; set; }

        [RadioReportId("nec_m_060209", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsHistologyProven { get; set; }
        
        public HistologyProvenType HistologyProvenType { get; set; }
        
        [RadioReportId("nec_m_060213", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public SpineLocations LocalizationReferenceVertebra { get; set; }
        
        [RadioReportId("nec_m_060215", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public OrientationAxialType OrientationAxialType { get; set; }
        
        [RadioReportId("nec_m_060320", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsPharyngealMucosalSpacePMS { get; set; }
        
        [RadioReportId("nec_m_060321", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsParapharyngealSpacePPS { get; set; }
        
        [RadioReportId("nec_m_060322", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsMastatorSpaceMS { get; set; }
        
        [RadioReportId("nec_m_060323", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsBuccalSpaceBS { get; set; }
        
        [RadioReportId("nec_m_060324", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsParotidSpacePS { get; set; }
        
        [RadioReportId("nec_m_060325", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsCarotidSpaceCS { get; set; }
        
        [RadioReportId("nec_m_060326", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsRetropharyngealSpaceRPSAndDangerSpace { get; set; }
        
        [RadioReportId("nec_m_060327", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsPerivertebralSpacePVSPrevertebral { get; set; }
        
        [RadioReportId("nec_m_060328", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsPerivertebralSpacePVSParaspinal { get; set; }
        
        [RadioReportId("nec_m_060329", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsVisceralSpaceVS { get; set; }
        
        [RadioReportId("nec_m_060330", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsAnteriorCervicalSpaceACS { get; set; }
        
        [RadioReportId("nec_m_060331", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsPosteriorCervicalSpacePCS { get; set; }
        
        [RadioReportId("nec_m_060416", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOralMucosalSpaceOMS { get; set; }
        
        [RadioReportId("nec_m_060417", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsSublingualSpaceSLS { get; set; }
        
        [RadioReportId("nec_m_060418", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsSubmandibularSpaceSMS { get; set; }
        
        [RadioReportId("nec_m_060419", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsApexLinguae { get; set; }
        
        [RadioReportId("nec_m_060420", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsCorpusLinguae { get; set; }
        
        [RadioReportId("nec_m_060421", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsRadixLinguae { get; set; }
        
        [RadioReportId("nec_m_060422", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsTongueBaseTonsil { get; set; }
        
        [RadioReportId("nec_m_060423", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsValleculae { get; set; }
        
        [RadioReportId("nec_m_060424", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsTransspatialSpread { get; set; }
        
        public VascularNerveSheathType VascularNerveSheathType { get; set; }
        
        [RadioReportId("nec_m_060506", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsRegioParotideomasseterica { get; set; }
        
        [RadioReportId("nec_m_060507", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsBuccalRegion { get; set; }
        
        [RadioReportId("nec_m_060508", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOralRegion { get; set; }
        
        [RadioReportId("nec_m_060509", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsMentalRegion { get; set; }
        
        [RadioReportId("nec_m_060510", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsSubmental { get; set; }
        
        [RadioReportId("nec_m_060511", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsUpperLip { get; set; }
        
        [RadioReportId("nec_m_060512", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsLowerLip { get; set; }
        
        [RadioReportId("nec_m_060217", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsPharyngealMuscles { get; set; }
        
        [RadioReportId("nec_m_060218", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsUvulaeMuscle { get; set; }
        
        [RadioReportId("nec_m_060220", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsLaryngealMuscles { get; set; }
        
        [RadioReportId("nec_m_060221", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsVocalMuscle { get; set; }
        
        [RadioReportId("nec_m_060223", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsIntrinsicMusclesOfTheTongue { get; set; }
        
        [RadioReportId("nec_m_060224", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsGenioglossusMuscle { get; set; }
        
        [RadioReportId("nec_m_060225", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsHyoglossusMuscle { get; set; }
        
        [RadioReportId("nec_m_060227", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsFloorOfMouthMuscles { get; set; }
        
        [RadioReportId("nec_m_060228", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsMylohyoidMuscle { get; set; }
        
        [RadioReportId("nec_m_060229", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsGeniohyoidMuscle { get; set; }
        
        [RadioReportId("nec_m_060230", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsDigastricMuscle { get; set; }
        
        [RadioReportId("nec_m_060333", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsNeckMuscles { get; set; }
        
        [RadioReportId("nec_m_060334", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsLongusCapitisMuscle { get; set; }
        
        [RadioReportId("nec_m_060335", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsLongusColliMuscle { get; set; }
        
        [RadioReportId("nec_m_060336", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsLevatorScapulaeMuscle { get; set; }
        
        [RadioReportId("nec_m_060337", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsScalenusAnteriorMuscle { get; set; }
        
        [RadioReportId("nec_m_060338", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsScalenusMediusMuscle { get; set; }
        
        [RadioReportId("nec_m_060339", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsScalenusPosteriorMuscle { get; set; }
        
        [RadioReportId("nec_m_060340", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsSternocleidomastoideusMuscle { get; set; }
        
        [RadioReportId("nec_m_060342", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsParaspinalMuscles { get; set; }
        
        [RadioReportId("nec_m_060343", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsDeepOrIntrinsicMusclesMedialTract { get; set; }
        
        [RadioReportId("nec_m_060344", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsDeepOrIntrinsicMusclesLateralTract { get; set; }
        
        [RadioReportId("nec_m_060345", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsTrapeziusMuscle { get; set; }
        
        [RadioReportId("nec_m_060430", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public int? SizeInMm { get; set; }
        
        [RadioReportId("nec_m_060433", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public int? SecondPlaneInMm { get; set; }
        
        [RadioReportId("nec_m_060436", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public int? ThirdPlaneInMm { get; set; }
        
        public MarginType MarginType { get; set; } 
        
        [RadioReportId("nec_m_060441-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }
        
        [RadioReportId("nec_m_060514", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public ShapeType ShapeDifferentialDiagnosis { get; set; }
        
        [RadioReportId("nec_m_060517", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public SignalTypeExtended SignalT1w { get; set; }

        [RadioReportId("nec_m_060520", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public SignalTypeExtended SignalT2w { get; set; }
        
        [RadioReportId("nec_m_060522", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsDiffusionRestriction { get; set; }
        
        [RadioReportId("nec_m_060232", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsMicroscopicFat { get; set; }
        
        [RadioReportId("nec_m_060233", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsMacroscopicFat { get; set; }
        
        [RadioReportId("nec_m_060234", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsCyst { get; set; }
        
        public CystType CystType { get; set; }
        
        [RadioReportId("nec_m_060237", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsHemorrhageOrHemosiderin { get; set; }
        
        [RadioReportId("nec_m_060238", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsCalcifications { get; set; }
        
        [RadioReportId("nec_m_060239", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsCapsule { get; set; }
        
        [RadioReportId("nec_m_060240", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsSepta { get; set; }
        
        [RadioReportId("nec_m_060241", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsToothOrBone { get; set; }
        
        [RadioReportId("nec_m_060242", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsNecrosis { get; set; }
        
        [RadioReportId("nec_m_060243", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsAirFluidLevel { get; set; }
        
        [RadioReportId("nec_m_060347", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsExophytic { get; set; }
        
        [RadioReportId("nec_m_060348", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsEndophytic { get; set; }
        
        [RadioReportId("nec_m_060349", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsDisplacing { get; set; }
        
        [RadioReportId("nec_m_060350", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsInvasive { get; set; }

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }
        
        [RadioReportId("nec_m_060354-l", InstanceName = nameof(SignificantHomogeneityType), IsExportable = false)]
        public HomogeneityType SignificantHomogeneityType { get; set; }
        
        [RadioReportId("nec_m_060358", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }
        
        [RadioReportId("nec_m_060445", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsLymphadenitis { get; set; }
        
        [RadioReportId("nec_m_060446", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsSoftTissueEdema { get; set; }
        
        [RadioReportId("nec_m_060447", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsObliterationOfPerifocalFatTissue { get; set; }
        
        [RadioReportId("nec_m_060448", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsSoftTissueEmphysema { get; set; }
        
        [RadioReportId("nec_m_060449", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsAdjacentToTheRecurrentLaryngealNerve { get; set; }
        
        [RadioReportId("nec_m_060450", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsEdemaOfTheLongusColliMuscleRight { get; set; }
        
        [RadioReportId("nec_m_060451", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsEdemaLongusColliMuscleLeft { get; set; }
        
        [RadioReportId("nec_m_060524", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOsteomyelitis { get; set; }
        
        [RadioReportId("nec_m_060526", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOsteomyelitisMaxilla { get; set; }
        
        [RadioReportId("nec_m_060527", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOsteomyelitisMandible { get; set; }
        
        [RadioReportId("nec_m_060528", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOsteomyelitisCorpusMandibulae { get; set; }
        
        [RadioReportId("nec_m_060529", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOsteomyelitisRamusMandibulae { get; set; }
        
        [RadioReportId("nec_m_060530", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOsteolysis { get; set; }
        
        [RadioReportId("nec_m_060532", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOsteolysisMaxilla { get; set; }
        
        [RadioReportId("nec_m_060533", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOsteolysisMandible { get; set; }
        
        [RadioReportId("nec_m_060534", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOsteolysisCorpusMandibulae { get; set; }
        
        [RadioReportId("nec_m_060535", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsOsteolysisRamusMandibulae { get; set; }
        
        [RadioReportId("nec_m_060245", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsMediastinitis { get; set; }
        
        [RadioReportId("nec_m_060246", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsAirwayObstruction { get; set; }
        
        [RadioReportId("nec_m_060248", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public int? AirwayObstructionMinDiameterInMm { get; set; }
        
        [RadioReportId("nec_m_060250", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsTrachealDisplacement { get; set; }
        
        public TrachealDisplacementType TrachealDisplacementType { get; set; }
        
        [RadioReportId("nec_m_060359", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsActiveBleeding { get; set; }
        
        [RadioReportId("nec_m_060360", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsInternalJugularVeinThrombosisRight { get; set; }
        
        [RadioReportId("nec_m_060361", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsInternalJugularVeinThrombosisLeft { get; set; }
        
        [RadioReportId("nec_m_060362", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsPseudoaneurysmICARight { get; set; }
        
        [RadioReportId("nec_m_060363", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsPseudoaneurysmICALeft { get; set; }
        
        [RadioReportId("nec_m_060364", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsStenosisICARight { get; set; }
        
        [RadioReportId("nec_m_060365", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsStenosisICALeft { get; set; }
        
        [RadioReportId("nec_m_060366", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsAffectionSpinalCanal { get; set; }
        
        [RadioReportId("nec_m_060367", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsEpiduralExtension { get; set; }
        
        [RadioReportId("nec_m_060454", InstanceName = nameof(SoftTissuesFindingType.MassInflammation), AlternativeTranslationSuffix="v2")]
        public DifferentialDiagnosisType DifferentialDiagnosis1 { get; set; }
        
        [RadioReportId("nec_m_060405", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        [RadioReportId("nec_m_060455", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsSuspicionOf { get; set; }
        
        [RadioReportId("nec_m_060457", InstanceName = nameof(SoftTissuesFindingType.MassInflammation), AlternativeTranslationSuffix="v2")]
        public DifferentialDiagnosisType DifferentialDiagnosis2 { get; set; }
        
        [RadioReportId("nec_m_060459", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsAbove1LesionSameEntity { get; set; }
        
        [RadioReportId("nec_m_060460", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        public bool IsDisseminated { get; set; }
        
        #endregion
        
        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(CharacterizationCystType.LateralNeckCyst) => IsCystSubordinate.ToString() == customConditionId,
                nameof(CharacterizationCystType.TornwaldtCyst) => IsCystSubordinate.ToString() == customConditionId,
                _ => false
            };
    }
}
