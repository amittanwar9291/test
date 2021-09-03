using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.Vessels;
using System;
using ShapeType = RadioReport.HeadMRT.Domain.Enums.Vessels.ShapeType;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class VesselsFinding : FindingBase, IRadioReportIdConditionEvaluator, IImageFileContainer
    {
        #region Common
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_040106")]
        public VesselsFindingType FindingType { get; set; }

        [RadioReportId("hea_m_040231", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_m_040354", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public AffectedSegmentsOrVesselsLocations AffectedSegmentsOrVesselsLocation { get; set; }

        [RadioReportId("hea_m_040234", InstanceName = nameof(VesselsFindingType.Ischemia))]
        [RadioReportId("hea_m_040393", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsBloomingArtifact { get; set; }

        [RadioReportId("hea_m_040533", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        [RadioReportId("hea_m_0404107", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsThrombosis { get; set; }

        [RadioReportId("hea_m_040560", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        [RadioReportId("hea_m_040538", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public VesselsDifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        public SideType SideType { get; set; }

        #region IMAGE FILE
        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_04_007l", InstanceName = "HeadMRT.Vessels.VesselsFinding", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

        public void DropImageFile(Guid? imageFileId = null)
        {
            ImageFileId = null;
            UploadedImageFile = null;
        }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            ImageFileId = imageFile?.Id;
            UploadedImageFile = imageFile;
        }

        [RadioReportId("uni_04_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_04_005")]
        public string PictureNumber { get; set; }
        #endregion

        #endregion

        #region Ischemia
        public ArterialTerritoryType ArterialTerritoryType { get; set; }

        [RadioReportId("hea_m_040275", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public FormType FormType { get; set; }

        [RadioReportId("hea_m_040277", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public VascularTerritoryLocations VascularTerritoryLocations { get; set; }

        public VascularTerritoryType VascularTerritoryType { get; set; }

        [RadioReportId("hea_m_040282", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCorticalVeins { get; set; }

        [RadioReportId("hea_m_040283", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCorticalVeinsRight { get; set; }

        [RadioReportId("hea_m_040284", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCorticalVeinsLeft { get; set; }

        [RadioReportId("hea_m_040285", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsInternalCerebralVeins { get; set; }

        [RadioReportId("hea_m_040286", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsInternalCerebralVeinsRight { get; set; }

        [RadioReportId("hea_m_040287", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsInternalCerebralVeinsLeft { get; set; }

        [RadioReportId("hea_m_040288", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsVeinOfLabbeRight { get; set; }

        [RadioReportId("hea_m_040289", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsVeinOfLabbeLeft { get; set; }

        [RadioReportId("hea_m_040290", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsSphenoparietalSinusRight { get; set; }

        [RadioReportId("hea_m_040291", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsSphenoparietalSinusLeft { get; set; }

        [RadioReportId("hea_m_040387", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public CortexLocations CortexLocations { get; set; }

        [RadioReportId("hea_m_040483", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsPraecuneus { get; set; }

        [RadioReportId("hea_m_040485", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCuneus { get; set; }

        [RadioReportId("hea_m_040486", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsLingualGyrus { get; set; }

        [RadioReportId("hea_m_040488", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsGyrusTemporalisTransversus { get; set; }
        
        [RadioReportId("hea_m_040489", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsLateralOccipitotemporalGyrus { get; set; }

        [RadioReportId("hea_m_040491", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsParsIntermedia { get; set; }

        [RadioReportId("hea_m_040492", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsSuperiorCerebellarPeduncle { get; set; }

        [RadioReportId("hea_m_040493", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsMiddleCerebellarPeduncle { get; set; }

        [RadioReportId("hea_m_040494", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsInferiorCerebellarPeduncle { get; set; }

        [RadioReportId("hea_m_040546", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCortex { get; set; }

        [RadioReportId("hea_m_040547", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsWhiteMatter { get; set; }

        [RadioReportId("hea_m_040548", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public WhiteMatterType WhiteMatterType { get; set; }

        public DetailsType DetailsType { get; set; }

        [RadioReportId("hea_m_040553", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public BasalGangliaLocations BasalGangliaLocations { get; set; }

        public PatternType PatternType { get; set; }

        [RadioReportId("hea_m_040218", InstanceName = nameof(VesselsFindingType.Ischemia))]
		public bool IsPerifocalGliosis { get; set; }

		[RadioReportId("hea_m_040219", InstanceName = nameof(VesselsFindingType.Ischemia))]
		public bool IsEtatLacunaire { get; set; }

        [RadioReportId("hea_m_040222", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCortexWedgeShapedConfiguration { get; set; }

        [RadioReportId("hea_m_040223", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsWhiteMatterAffected { get; set; }

        [RadioReportId("hea_m_040224", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCortexAffected { get; set; }

        [RadioReportId("hea_m_040225", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsStringOfPearlsAspect { get; set; }

        [RadioReportId("hea_m_040221", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public SignalType SignalT2Flare { get; set; }

        public DiffusionImagingType DiffusionImagingType { get; set; }

        public DiffusionRestrictionType DiffusionRestrictionType { get; set; }
        
        public DWISignalType DWISignalType { get; set; }

        public ADCMapType ADCMapType { get; set; }

        public FLAIRDWIRatioType FLAIRDWIRatioType { get; set; }

        [RadioReportId("hea_m_040421", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public SignalType SignalT1w { get; set; }

        public MRPerfusionType MRPerfusionType { get; set; }

        [RadioReportId("hea_m_040506", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsRelativeReductionCBFCBV { get; set; }

        [RadioReportId("hea_m_040507", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsProlongationOfMTT { get; set; }

        [RadioReportId("hea_m_040508", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsProlongationOfTTP { get; set; }

        [RadioReportId("hea_m_040509", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsPWIDWIMismatch { get; set; }

        [RadioReportId("hea_m_040512", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public int? PenumbraTissueAtRisk { get; set; }
        
        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        public InfarctStageType InfarctStageType { get; set; }

        [RadioReportId("hea_m_040423", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsPseudolaminarNecrosis { get; set; }

        [RadioReportId("hea_m_040424", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsHemorrhagicTransformation { get; set; }

        [RadioReportId("hea_m_040425", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsPetechial { get; set; }

        [RadioReportId("hea_m_040426", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsParenchymatous { get; set; }

        [RadioReportId("hea_m_040427", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsVentricularHerniation { get; set; }

        [RadioReportId("hea_m_040428", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsSwellingOfTheGyri { get; set; }

        [RadioReportId("hea_m_040429", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsNarrowedSulci { get; set; }

        [RadioReportId("hea_m_040430", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsGeneralizedCerebralEdema { get; set; }

        [RadioReportId("hea_m_040431", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsWedgeShapedConfiguration { get; set; }

        [RadioReportId("hea_m_040229", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsVascularOcclusion { get; set; }

        [RadioReportId("hea_m_040232", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsDDArtifactTOFAngiography { get; set; }

        [RadioReportId("hea_m_040235", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsIntraarterialFLAIRSignalEnhancement { get; set; }

        [RadioReportId("hea_m_040237", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public int? LongitudinalExpansionOfThrombus { get; set; }

        public GradingType GradingType { get; set; }

        [RadioReportId("hea_m_040327", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsAnteriorCommunicatingArtery { get; set; }

        [RadioReportId("hea_m_040328", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsPosteriorCommunicatingArtery { get; set; }

        [RadioReportId("hea_m_040433", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCollateralizationOfTheICAECA { get; set; }

        [RadioReportId("hea_m_040434", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsRetrogradePerfusionofTheOphthalmic { get; set; }

        [RadioReportId("hea_m_040435", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsPerfusionOfTheICAPars { get; set; }

        [RadioReportId("hea_m_040436", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsThroughContralateralexternalCarotidArtery { get; set; }

        [RadioReportId("hea_m_040437", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsThroughIpsilateralvertebralArtery { get; set; }

        [RadioReportId("hea_m_040438", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsLeptomeningealcollaterals { get; set; }

        [RadioReportId("hea_m_040515", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsCervicalVesselElongation { get; set; }

        [RadioReportId("hea_m_040516", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsHighGradeStenosisupstreamcervicalArtery { get; set; }

        [RadioReportId("hea_m_040517", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsOcclusionOfUpstreamcervicalArtery { get; set; }

        [RadioReportId("hea_m_040518", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsThrombusInUpstreamcervicalArtery { get; set; }

        [RadioReportId("hea_m_040519", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsDissectionOfUpstreamcervicalArtery { get; set; }

        [RadioReportId("hea_m_040520", InstanceName = nameof(VesselsFindingType.Ischemia))]
        public bool IsOstialStenosisaffectedVessel { get; set; }
        #endregion

        #region CerebralVenousThrombosis
        [RadioReportId("hea_m_040293", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public CerebralVenousThrombosisLocations CerebralVenousThrombosisLocations { get; set; }

        [RadioReportId("hea_m_040389", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsThrombusDetection { get; set; }

        [RadioReportId("hea_m_040390", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsCerebralEdema { get; set; }

        [RadioReportId("hea_m_040392", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsMissingFlowVoid { get; set; }

        [RadioReportId("hea_m_040394", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsElongatedthrombusCourse { get; set; }

        [RadioReportId("hea_m_040395", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsSignalVoidInphaseContrast { get; set; }

        [RadioReportId("hea_m_040396", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsContrastFillingDefectinMRV { get; set; }

        [RadioReportId("hea_m_040397", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsEmptyDeltaSign { get; set; }

        [RadioReportId("hea_m_040398", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsDuralEnhancement { get; set; }

        public GradingOcclusionType GradingOcclusionType { get; set; }

        [RadioReportId("hea_m_040499", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public int? MinDiameterresidualLumen { get; set; }

        public CharacterizationThrombusType CharacterizationThrombusType { get; set; }

        [RadioReportId("hea_m_040555", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsCongestiveHemorrhage { get; set; }

        [RadioReportId("hea_m_040556", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsPetechialhemorrhages { get; set; }

        [RadioReportId("hea_m_040557", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsEctasiaOfTheUpstream { get; set; }

        [RadioReportId("hea_m_040558", InstanceName = nameof(VesselsFindingType.CerebralVenousThrombosis))]
        public bool IsSAH { get; set; }
        #endregion

        #region Aneurysm
        public LocalizationAneurysmaType LocalizationAneurysmaType { get; set; }

        [RadioReportId("hea_m_040359", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public bool IsV1 { get; set; }

        [RadioReportId("hea_m_040360", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public bool IsV2 { get; set; }

        [RadioReportId("hea_m_040361", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public bool IsV3 { get; set; }

        [RadioReportId("hea_m_040362", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public bool IsV4 { get; set; }

        [RadioReportId("hea_m_040367", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public InternalCarotidArterySegmentsLocations SegmentsBouthillierLocations { get; set; }

        [RadioReportId("hea_m_040457", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_m_040459", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public int? ExtensionAneurysm { get; set; }

        [RadioReportId("hea_m_040462", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public int? SecondPlane { get; set; }

        [RadioReportId("hea_m_040465", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public int? ThirdPlane { get; set; }

        [RadioReportId("hea_m_040468", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public int? AneurysmNeckWidth { get; set; }

        [RadioReportId("hea_m_040472", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public AlignmentOfAneurysmDomeType AlignmentOfAneurysmDomeType { get; set; }
        
        [RadioReportId("hea_m_040526", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public bool IsSubarachnoidHemorrhage { get; set; }

        public SubarachnoidHemorrhageType SubarachnoidHemorrhageType { get; set; }

        public SubarachnoidHemorrhageLocalizationType SubarachnoidHemorrhageLocalizationType { get; set; }

        [RadioReportId("hea_m_040534", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public bool IsEccentric { get; set; }

        [RadioReportId("hea_m_040535", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public bool IsDownstreamInfarctAreas { get; set; }

        [RadioReportId("hea_m_040536", InstanceName = nameof(VesselsFindingType.Aneurysm))]
        public bool IsInflammatoryChange { get; set; }

        #endregion

        #region VascularMalformation
        [RadioReportId("hea_m_040260", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        public bool IsSuspicionOf { get; set; }

        public WithoutAVShuntType WithoutAVShuntType { get; set; }

        public WithAVShuntType WithAVShuntType { get; set; }

        [RadioReportId("hea_m_040476", InstanceName = nameof(VesselsFindingType.VascularMalformation))]
        public bool IsReverseFlowSuspected { get; set; }
        #endregion

        #region DuralAVFistula
        [RadioReportId("hea_m_040266", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsFrontal { get; set; }

        [RadioReportId("hea_m_040267", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsTemporal { get; set; }

        [RadioReportId("hea_m_040268", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsParietal { get; set; }

        [RadioReportId("hea_m_040269", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsOccipital { get; set; }

        [RadioReportId("hea_m_040270", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsInfratentorial { get; set; }

        [RadioReportId("hea_m_040379", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsTransverseSinus { get; set; }
        
        [RadioReportId("hea_m_040380", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsSigmoidSinus { get; set; }

        [RadioReportId("hea_m_040381", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsSinusCavernosus { get; set; }

        [RadioReportId("hea_m_040382", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsSuperiorSagittalSinus { get; set; }

        [RadioReportId("hea_m_040383", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsSuperiorPetrosalSinus { get; set; }

        [RadioReportId("hea_m_040384", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsInferiorPetrosalSinus { get; set; }

        [RadioReportId("hea_m_040479", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsReverseFlow { get; set; }

        [RadioReportId("hea_m_040480", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsSuspicionOfReverseFlow { get; set; }

        [RadioReportId("hea_m_0404108", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_m_0404109", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsEdema { get; set; }

        [RadioReportId("hea_m_0404110", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        public bool IsIschemia { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(LocalizationAneurysmaType.VertebralArtery) => LocalizationAneurysmaType.ToString() == customConditionId,
            nameof(LocalizationAneurysmaType.InternalCarotidArtery) => LocalizationAneurysmaType.ToString() == customConditionId,
            _ => false
        };
    }
}