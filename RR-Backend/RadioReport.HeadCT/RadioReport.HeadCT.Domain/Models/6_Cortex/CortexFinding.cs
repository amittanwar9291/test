using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums;
using RadioReport.HeadCT.Domain.Enums.Cortex;

namespace RadioReport.HeadCT.Domain.Models
{
    public class CortexFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();


        #region Common

        [RadioReportId("hea_c_060106")]
        public CortexFindingType FindingType { get; set; }

        [RadioReportId("hea_c_060110-l", InstanceName = InstanceNames.Cortex, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("hea_c_060205")]
        public bool IsHistologyKnown { get; set; }

        [RadioReportId("hea_c_060205-l", InstanceName = nameof(InstanceNames.Cortex), IsExportable = false)]
        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("hea_c_0603201")]
        public CortexLocations CortexLocations { get; set; }

        [RadioReportId("hea_c_0604202")]
        public bool IsPraecuneus { get; set; }

        [RadioReportId("hea_c_0604204")]
        public bool IsCuneus { get; set; }

        [RadioReportId("hea_c_0604205")]
        public bool IsLingualGyrus { get; set; }

        [RadioReportId("hea_c_0604207")]
        public bool IsGyrusTemporalisTransversus { get; set; }

        [RadioReportId("hea_c_0604208")]
        public bool IsLateralOccipitotemporalGyrus { get; set; }

        [RadioReportId("hea_c_0604210")]
        public bool IsParsIntermedia { get; set; }

        [RadioReportId("hea_c_0604211")]
        public bool IsSuperiorCerebellarPeduncle { get; set; }

        [RadioReportId("hea_c_0604212")]
        public bool IsMiddleCerebellarPeduncle { get; set; }

        [RadioReportId("hea_c_0604213")]
        public bool IsInferiorCerebellarPeduncle { get; set; }

        [RadioReportId("hea_c_0605201")]
        public bool IsCortex { get; set; }

        [RadioReportId("hea_c_0605202")]
        public bool IsWhiteMatter { get; set; }

        [RadioReportId("hea_c_0605203")]
        public LocalizationType LocalizationType { get; set; }

        public DetailsType DetailsType { get; set; }

        [RadioReportId("hea_c_0605234", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603217", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_c_0605233", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603218", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_c_0605232", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603219", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_c_0605240", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603223", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsConfluent { get; set; }

        [RadioReportId("hea_c_0605241", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603224", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsMassEffect { get; set; }

        [RadioReportId("hea_c_0605242", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603225", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("hea_c_0602212", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0604237", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsNarrowedSulci { get; set; }

        [RadioReportId("hea_c_0602213", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0604238", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsBlurringOfWhiteGreyJunction { get; set; }

        [RadioReportId("hea_c_0602214", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0604239", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_c_0602215", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0604240", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsDescentOfTheCerebellarTonsils { get; set; }

        [RadioReportId("hea_c_0602217", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0604241", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsHydrocephalus { get; set; }

        [RadioReportId("hea_c_060331", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0605222", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsMidlineShift { get; set; }

        [RadioReportId("hea_c_060333", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0605224", InstanceName = nameof(CortexFindingType.Diffuse))]
        public MidlineShiftSideType MidlineShiftSideType { get; set; }

        [RadioReportId("hea_c_060335", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0605226", InstanceName = nameof(CortexFindingType.Diffuse))]
        public int? MidlineShift { get; set; }

        [RadioReportId("hea_c_060337", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0605228", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsHerniation { get; set; }

        [RadioReportId("hea_c_060339", InstanceName = nameof(CortexFindingType.Focal), AlternativeTranslationSuffix = "CT")]
        [RadioReportId("hea_c_0605230", InstanceName = nameof(CortexFindingType.Diffuse), AlternativeTranslationSuffix = "CT")]
        public RegionType RegionType { get; set; }

        [RadioReportId("hea_c_060427", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0602219", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsCorticalThinning { get; set; }

        public CorticalThinningType CorticalThinningType { get; set; }

        [RadioReportId("hea_c_060431", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0602223", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsCorticalTuber { get; set; }

        [RadioReportId("hea_c_060432", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0602224", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsSubependymalNodules { get; set; }

        [RadioReportId("hea_c_060433", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0602225", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsCalcified { get; set; }

        [RadioReportId("hea_c_0605218", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603226", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsAbscess { get; set; }

        [RadioReportId("hea_c_0605220", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603228", InstanceName = nameof(CortexFindingType.Diffuse))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("hea_c_0604214", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603231", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsVentricularHerniation { get; set; }

        [RadioReportId("hea_c_0604215", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603232", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsLateralVentricleRight { get; set; }

        [RadioReportId("hea_c_0604216", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603233", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsLateralVentricleLeft { get; set; }

        [RadioReportId("hea_c_0604217", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603234", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool Is3RdVentricle { get; set; }

        [RadioReportId("hea_c_0604234", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_0603235", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool Is4thVentricle { get; set; }

        [RadioReportId("hea_c_060519-l", InstanceName = nameof(CortexFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        [RadioReportId("hea_c_0604246-l", InstanceName = nameof(CortexFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("hea_c_060522", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060519-l", InstanceName = nameof(CortexFinding) + nameof(ContrastEnhancementDistributionType), IsExportable = false)]
        public ContrastDistributionType ContrastEnhancementDistributionType { get; set; }

        [RadioReportId("hea_c_060528")]
        public bool IsLesionOfTheSameEntity { get; set; }

        [RadioReportId("hea_c_060530")]
        public bool IsRight { get; set; }

        [RadioReportId("hea_c_060531")]
        public bool IsLeft { get; set; }

        [RadioReportId("hea_c_060533")]
        public bool IsFrontal { get; set; }

        [RadioReportId("hea_c_060534")]
        public bool IsTemporal { get; set; }

        [RadioReportId("hea_c_060535")]
        public bool IsParietal { get; set; }

        [RadioReportId("hea_c_060536")]
        public bool IsOccipital { get; set; }

        [RadioReportId("hea_c_060537")]
        public bool IsInfratentorial { get; set; }

        [RadioReportId("hea_c_0603203-l", InstanceName = nameof(MarginType), IsExportable = false)]
        [RadioReportId("hea_c_060261-l", InstanceName = nameof(MarginType), IsExportable = false)]
        public MarginType MarginType { get; set; }

        [RadioReportId("hea_c_060249")]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_c_060342")]
        public bool IsSubordinate { get; set; }

        [RadioReportId("hea_c_060204", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060254", InstanceName = nameof(CortexFindingType.Diffuse))]
        public CortexDifferentialDiagnosisType CortexDifferentialDiagnosisType { get; set; }

        [RadioReportId("hea_c_060248", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060286", InstanceName = nameof(CortexFindingType.Diffuse))]
        public CortexDifferentialDiagnosisType CortexDifferentialDiagnosisType1 { get; set; }

        [RadioReportId("hea_c_060341", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060377", InstanceName = nameof(CortexFindingType.Diffuse))]
        public CortexDifferentialDiagnosisType CortexDifferentialDiagnosisType2 { get; set; }

        [RadioReportId("hea_c_060439", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_c_060473", InstanceName = nameof(CortexFindingType.Diffuse))]
        public CortexDifferentialDiagnosisType CortexDifferentialDiagnosisType3 { get; set; }

        #endregion


        #region Focal

        [RadioReportId("hea_c_060253", InstanceName = nameof(CortexFindingType.Focal))]
        public ClassificationWHOType LocalizationWHOClassification { get; set; }

        [RadioReportId("hea_c_060218", InstanceName = nameof(CortexFindingType.Focal))]
        public int? Size { get; set; }

        [RadioReportId("hea_c_060221", InstanceName = nameof(CortexFindingType.Focal))]
        public int? Size2ndPlane { get; set; }

        [RadioReportId("hea_c_060224", InstanceName = nameof(CortexFindingType.Focal))]
        public int? Size3rdPlane { get; set; }

        [RadioReportId("hea_c_0602203", InstanceName = nameof(CortexFindingType.Focal))]
        public int? MaxSizeInPreviousExamination { get; set; }

        [RadioReportId("hea_c_0602206", InstanceName = nameof(CortexFindingType.Focal))]
        public int? SecondPlane { get; set; }

        [RadioReportId("hea_c_0602209", InstanceName = nameof(CortexFindingType.Focal))]
        public int? ThirdPlane { get; set; }

        [RadioReportId("hea_c_0603206-l", InstanceName = nameof(ConfigurationMarginType), IsExportable = false)]
        public MarginType ConfigurationMarginType { get; set; }

        public DensityType DensityType { get; set; }

        [RadioReportId("hea_c_0603213", InstanceName = nameof(CortexFindingType.Focal))]
        public int? Quantitative { get; set; }

        [RadioReportId("hea_c_0604223-l", InstanceName = nameof(CortexFinding) + nameof(HomogeneityType), IsExportable = false)]
        [RadioReportId("hea_c_060264-l", InstanceName = nameof(CortexFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_c_0605216", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsCysticParts { get; set; }

        [RadioReportId("hea_c_0605217", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsSolidParts { get; set; }

        [RadioReportId("hea_c_0605235", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsFat { get; set; }

        [RadioReportId("hea_c_0605236", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_c_0605237", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_c_0605238", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hea_c_0602216", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsContactToTheVentricularSystem { get; set; }

        [RadioReportId("hea_c_0604233", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsAqueduct { get; set; }

        [RadioReportId("hea_c_0604235", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsCaputMedusa { get; set; }

        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("hea_c_060251", InstanceName = nameof(CortexFindingType.Focal))]
        public ClassificationWHOType ClassificationWHO1 { get; set; }

        [RadioReportId("hea_c_060346", InstanceName = nameof(CortexFindingType.Focal))]
        public ClassificationWHOType ClassificationWHO2 { get; set; }

        [RadioReportId("hea_c_060443", InstanceName = nameof(CortexFindingType.Focal))]
        public ClassificationWHOType ClassificationWHO3 { get; set; }

        #endregion


        #region Diffuse

        [RadioReportId("hea_c_060288", InstanceName = nameof(CortexFindingType.Diffuse))]
        public ClassificationAdamsType LocalizationModifiedClassificationAdams { get; set; }

        [RadioReportId("hea_c_0603216", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_c_0603220", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsMicroBleeding { get; set; }

        [RadioReportId("hea_c_0603221", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsHemorrhagicLacunae { get; set; }

        [RadioReportId("hea_c_0603230", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsAtrophy { get; set; }

        [RadioReportId("hea_c_060290", InstanceName = nameof(CortexFindingType.Diffuse), CustomConditionName = nameof(DescriptionType.IDescribe))]
        public ClassificationAdamsType ClassificationAdams1 { get; set; }

        [RadioReportId("hea_c_060379", InstanceName = nameof(CortexFindingType.Diffuse))]
        public ClassificationAdamsType ClassificationAdams2 { get; set; }

        [RadioReportId("hea_c_060475", InstanceName = nameof(CortexFindingType.Diffuse))]
        public ClassificationAdamsType ClassificationAdams3 { get; set; }

        [RadioReportId("hea_c_0602222", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsMesiotemporalSclerosis { get; set; }

        #endregion


        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(DescriptionType.IDescribe) => DescriptionType.ToString() == customConditionId,
            nameof(DescriptionType.IKnow) => DescriptionType.ToString() == customConditionId,
            nameof(CortexFindingType.Focal) => FindingType.ToString() == customConditionId,
            nameof(CortexFindingType.Diffuse) => FindingType.ToString() == customConditionId,
            _ => false
        };
    }
}