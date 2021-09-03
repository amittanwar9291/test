using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ThoraxCT.Domain.Enums;
using LocalizationAxialType = RadioReport.ThoraxCT.Domain.Enums.LungParenchyma.LocalizationAxialType;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class LungParenchymaFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("tho_c_050106")]
        public LungParenchymaFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("tho_c_0502301", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0502301", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_0502310", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public LungParenchymaDiagnosisType MainCharacteristicsDifferentialDiagnosis01 { get; set; }

        [RadioReportId("tho_c_050302-l", InstanceName = nameof(LungParenchymaFindingType.Nodule), IsExportable = false)]
        [RadioReportId("tho_c_0503245", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public LocalizationDetailsType LocalizationDetailsType { get; set; }

        public LungParenchymaDensityType DensityType { get; set; }

        public SubsolidType SubsolidType { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("tho_c_050510-l", InstanceName = nameof(LungParenchymaFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("tho_c_050218", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505303", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_050253", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsEccentricNecrosis { get; set; }

        [RadioReportId("tho_c_050220", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505305", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsFat { get; set; }

        [RadioReportId("tho_c_050221", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505306", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsCalcification { get; set; }

        public LungParenchymaCalcificationType CalcificationType { get; set; }

        [RadioReportId("tho_c_050229", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505313", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_050255", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsCavitation { get; set; }

        [RadioReportId("tho_c_050315", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0502316", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsPleuralFinger { get; set; }

        [RadioReportId("tho_c_050316", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0502317", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsCoronaRadiataOrSpiculae { get; set; }

        [RadioReportId("tho_c_050319", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0502319", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_050347", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsAssociatedAtelectasis { get; set; }

        [RadioReportId("tho_c_0503200", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0503234", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsReversedHaloSign { get; set; }

        [RadioReportId("tho_c_050317", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0502318", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_050345", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsHaloSign { get; set; }

        [RadioReportId("tho_c_050260", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        [RadioReportId("tho_c_050365", InstanceName = nameof(LungParenchymaFindingType.PulmonaryInfarction))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("tho_c_0502302", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0502302", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_0502302", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        [RadioReportId("tho_c_0502315", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        [RadioReportId("tho_c_0502315", InstanceName = nameof(LungParenchymaFindingType.PulmonaryInfarction))]
        public LungsFlapsLocations MainCharacteristicsLungsFlapsLocation { get; set; }

        #endregion

        #region Nodule

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("tho_c_0503204-l", InstanceName = nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        #endregion

        #region Consolidation 

        public ConsolidationLocalizationType ConsolidationLocalizationType { get; set; }

        [RadioReportId("tho_c_050334", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsGroundGlassOpacity { get; set; }

        public GroundGlassOpacityType GroundGlassOpacityType { get; set; }

        public LocalizationAxialType LocalizationAxialType { get; set; }

        public MorphologyType MorphologyType { get; set; }

        [RadioReportId("tho_c_0504229", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsRoundedShape { get; set; }

        [RadioReportId("tho_c_050333", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsPositiveBronchopneumogram { get; set; }

        [RadioReportId("tho_c_050336", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsDarkBronchusSign { get; set; }

        [RadioReportId("tho_c_050348", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsAccompanyingEffusion { get; set; }

        [RadioReportId("tho_c_0504228", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsConfluent { get; set; }

        [RadioReportId("tho_c_0504231", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsPeribronchovascular { get; set; }

        [RadioReportId("tho_c_050256", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsLuftsichelSign { get; set; }

        [RadioReportId("tho_c_0504230", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsGeographicAppearance { get; set; }

        [RadioReportId("tho_c_0504232", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsCrazyPavingPattern { get; set; }

        [RadioReportId("tho_c_0504233", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsInterlobularSeptalThickening { get; set; }

        #endregion
    }
}