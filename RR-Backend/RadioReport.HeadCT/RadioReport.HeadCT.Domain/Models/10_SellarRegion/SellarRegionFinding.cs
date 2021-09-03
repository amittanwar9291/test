using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums;
using RadioReport.HeadCT.Domain.Enums.SellarRegion;

namespace RadioReport.HeadCT.Domain.Models
{
    public class SellarRegionFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        #region Common

        [RadioReportId("hea_c_100106")]
        public SellarRegionFindingType FindingType { get; set; }

        [RadioReportId("hea_c_100111-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("hea_c_100217-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("hea_c_100309-l", InstanceName = nameof(SellarRegionFinding) + nameof(SideType), IsExportable = false)]
        public SideType SideType { get; set; }

        [RadioReportId("hea_c_100205-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public MarginType MarginType { get; set; }

        [RadioReportId("hea_c_100208-l", InstanceName = nameof(SellarRegionFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_c_100211-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_c_100312-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public DensityType DensityType { get; set; }

        [RadioReportId("hea_c_100225-l", InstanceName = nameof(SellarRegionFinding) + nameof(CarotidArterySideType), IsExportable = false)]
        public SideType CarotidArterySideType { get; set; }

        [RadioReportId("hea_c_100321-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public MidlineShiftSideType PituitaryStalkSideType { get; set; }

        [RadioReportId("hea_c_100425-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public ContrastEnhancementType ContrastQuantitativeType { get; set; }

        [RadioReportId("hea_c_100428-l", InstanceName = nameof(SellarRegionFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("hea_c_100432-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public ContrastDistributionType ContrastDistributionType { get; set; }

        #endregion

        #region Pathology

        // Localization tab

        [RadioReportId("hea_c_100204", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public SellarRegionDiagnosisType SellarRegionDiagnosisLocalizationType { get; set; }

        [RadioReportId("hea_c_100217", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsHistologyKnown { get; set; }

        public RelationToThePituitaryGlandType RelationToThePituitaryGlandType { get; set; }

        [RadioReportId("hea_c_100306", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsNeurohypophysis { get; set; }

        [RadioReportId("hea_c_100307", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsAdenohypophysis { get; set; }

        [RadioReportId("hea_c_100308", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsPituitaryStalk { get; set; }

        [RadioReportId("hea_c_100403", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsCavernousSinus { get; set; }

        [RadioReportId("hea_c_100404", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsOpticNerveI { get; set; }

        [RadioReportId("hea_c_100405", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsOpticChiasm { get; set; }

        [RadioReportId("hea_c_100406", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsOlfactoryNerveII { get; set; }

        [RadioReportId("hea_c_100407", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsOculomotorNerveIII { get; set; }

        [RadioReportId("hea_c_100408", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsTrochlearNerveIV { get; set; }

        [RadioReportId("hea_c_100409", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsAbducensNerveVI { get; set; }

        [RadioReportId("hea_c_100410", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsInternalCarotidArtery { get; set; }

        [RadioReportId("hea_c_100411", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsDuraMaterMeningen { get; set; }

        [RadioReportId("hea_c_100412", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSphenoidSinus { get; set; }

        [RadioReportId("hea_c_100413", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsNasopharynx { get; set; }

        [RadioReportId("hea_c_100504", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public int? ExtensionSize { get; set; }

        [RadioReportId("hea_c_100507", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public int? ExtensionSize2ndPlane { get; set; }

        [RadioReportId("hea_c_100510", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public int? ExtensionSize3rdPlane { get; set; }

        // Characterization I tab

        [RadioReportId("hea_c_100319", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public int? Quantitative { get; set; }

        [RadioReportId("hea_c_100415", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSubstanceDefect { get; set; }

        [RadioReportId("hea_c_100416", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_c_100417", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_c_100418", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_c_100419", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsFat { get; set; }

        [RadioReportId("hea_c_100420", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_c_100421", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_c_100422", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_c_100423", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hea_c_100424", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsToothBoneFormation { get; set; }

        [RadioReportId("hea_c_100513", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsDisplacement { get; set; }

        [RadioReportId("hea_c_100514", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsInfiltration { get; set; }

        // Characterization II tab

        [RadioReportId("hea_c_100221", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsHydrocephalus { get; set; }

        [RadioReportId("hea_c_100222", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_c_100223", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsBonyRemodeling { get; set; }

        [RadioReportId("hea_c_100224", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsDuraTailSign { get; set; }

        [RadioReportId("hea_c_100225", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsContactWithCarotidArtery { get; set; }

        [RadioReportId("hea_c_100321", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsDisplacementOfPituitaryStalk { get; set; }

        [RadioReportId("hea_c_100325", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsInfiltrationIntoCavernousSinus { get; set; }

        [RadioReportId("hea_c_100326", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSuspicionOfInfiltration { get; set; }

        [RadioReportId("hea_c_100327", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsExtensionToSuprasellar { get; set; }

        [RadioReportId("hea_c_100328", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsContactToOpticChiasm { get; set; }

        [RadioReportId("hea_c_100431", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsDetectionOfLesion { get; set; }

        // DifferentialDiagnosis tab

        [RadioReportId("hea_c_100233", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public SellarRegionDiagnosisType SellarRegionDiagnosis1Type { get; set; }

        [RadioReportId("hea_c_100234", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_c_100236", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public SellarRegionDiagnosisType SellarRegionDiagnosis2Type { get; set; }

        [RadioReportId("hea_c_100237", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("hea_c_100239", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public SellarRegionDiagnosisType SellarRegionDiagnosis3Type { get; set; }

        [RadioReportId("hea_c_100240", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool Is1LesionOfTheSameEntity { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            _ => false
        };
    }
}
