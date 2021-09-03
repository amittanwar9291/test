using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.SellarRegion;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class SellarRegionFinding : SellarRegionFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common
        [RadioReportId("hea_m_100111-l", InstanceName = InstanceNames.SellarRegion, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }
        #endregion

        #region Pathology

        // Localization tab

        public RelationToThePituitaryGlandType RelationToThePituitaryGlandType { get; set; }

        [RadioReportId("hea_m_100306", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsNeurohypophysis { get; set; }

        [RadioReportId("hea_m_100307", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsAdenohypophysis { get; set; }

        [RadioReportId("hea_m_100308", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsPituitaryStalk { get; set; }

        [RadioReportId("hea_m_100309-l", InstanceName = nameof(SellarRegionFinding) + nameof(SideType), IsExportable = false)]
        public SideType SideType { get; set; }

        [RadioReportId("hea_m_100403", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsCavernousSinus { get; set; }

        [RadioReportId("hea_m_100404", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsOpticNerveI { get; set; }

        [RadioReportId("hea_m_100405", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsOpticChiasm { get; set; }

        [RadioReportId("hea_m_100406", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsOlfactoryNerveII { get; set; }

        [RadioReportId("hea_m_100407", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsOculomotorNerveIII { get; set; }

        [RadioReportId("hea_m_100408", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsTrochlearNerveIV { get; set; }

        [RadioReportId("hea_m_100409", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsAbducensNerveVI { get; set; }

        [RadioReportId("hea_m_100410", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsInternalCarotidArtery { get; set; }

        [RadioReportId("hea_m_100411", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsDuraMaterMeningen { get; set; }

        [RadioReportId("hea_m_100412", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSphenoidSinus { get; set; }

        [RadioReportId("hea_m_100413", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsNasopharynx { get; set; }

        [RadioReportId("hea_m_100504", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public int? ExtensionSize { get; set; }

        [RadioReportId("hea_m_100507", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public int? ExtensionSize2ndPlane { get; set; }

        [RadioReportId("hea_m_100510", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public int? ExtensionSize3rdPlane { get; set; }

        // Characterization I tab

        [RadioReportId("hea_m_100419", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("hea_m_100513", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_m_100515", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_m_100516", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsFat { get; set; }

        [RadioReportId("hea_m_100518", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_m_100520", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSignalVoids { get; set; }

        [RadioReportId("hea_m_100522", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsToothBoneFormation { get; set; }

        // Characterization II tab

        [RadioReportId("hea_m_100242", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsDisplacement { get; set; }

        [RadioReportId("hea_m_100219", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("hea_m_100318", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsHydrocephalus { get; set; }

        [RadioReportId("hea_m_100320", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsBonyRemodeling { get; set; }

        [RadioReportId("hea_m_100323", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsContactWithCarotidArtery { get; set; }

        [RadioReportId("hea_m_100428-l", InstanceName = nameof(SellarRegionFinding) + nameof(CarotidArterySideType), IsExportable = false)]
        public SideType CarotidArterySideType { get; set; }

        [RadioReportId("hea_m_100427", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsDisplacementOfPituitaryStalk { get; set; }

        [RadioReportId("hea_m_100427-l", InstanceName = nameof(SellarRegionFinding) + nameof(PituitaryStalkSideType), IsExportable = false)]
        public SideType PituitaryStalkSideType { get; set; }

        [RadioReportId("hea_m_100431", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsInfiltrationIntoCavernousSinus { get; set; }

        [RadioReportId("hea_m_100432", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSuspicionOfInfiltration { get; set; }

        [RadioReportId("hea_m_1004333", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsExtensionToSuprasellar { get; set; }

        [RadioReportId("hea_m_100434", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsAffectionOpticChiasm { get; set; }

        [RadioReportId("hea_m_100526", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsDetectionOfLesion { get; set; }

        // DifferentialDiagnosis tab

        [RadioReportId("hea_m_100233", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public SellarRegionDiagnosisType SellarRegionDiagnosis1Type { get; set; }

        [RadioReportId("hea_m_100236", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public SellarRegionDiagnosisType SellarRegionDiagnosis2Type { get; set; }

        [RadioReportId("hea_m_100239", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public SellarRegionDiagnosisType SellarRegionDiagnosis3Type { get; set; }

        [RadioReportId("hea_m_100234", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_m_100237", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("hea_m_100240", InstanceName = nameof(SellarRegionFindingType.Pathology))]
        public bool Is1LesionOfTheSameEntity { get; set; }
        #endregion

        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(SellarRegionFindingType.Pathology) => FindingType.ToString() == customConditionId,
            _ => false
        };
    }
}
