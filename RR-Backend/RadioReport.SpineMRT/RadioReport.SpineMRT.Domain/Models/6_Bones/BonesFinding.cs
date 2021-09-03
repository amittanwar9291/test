using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.SpineMRT.Domain.Enums;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class BonesFinding : BonesFindingBase, IRadioReportIdConditionEvaluator
    {
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("spi_m_060203", InstanceName = nameof(BonesFindingType.Fracture))]
        [RadioReportId("spi_m_060204", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("spi_m_060204", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        [RadioReportId("spi_m_060204", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        [RadioReportId("spi_m_060203", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060237", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public SpineLocations SpineLocation { get; set; }

        [RadioReportId("spi_m_0603100", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        [RadioReportId("spi_m_060368", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060565", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public SpineLocations SpineLocation2 { get; set; }

        [RadioReportId("spi_m_060525", InstanceName = nameof(BonesFindingType.Fracture))]
        [RadioReportId("spi_m_060229", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060243", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public bool IsSecondary { get; set; }

        [RadioReportId("spi_m_060226", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060240", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public BonesDiagnosisType DifferentialDiagnosis01 { get; set; }

        [RadioReportId("spi_m_060558", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060563", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public bool IsPathologicFracture { get; set; }

        [RadioReportId("spi_m_060228", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060242", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public BonesDiagnosisType DifferentialDiagnosis02 { get; set; }

        #region FRACTURE_C0
        public C0StabilityType FractureStabilityType { get; set; }

        public RotationOrTranslationType RotationOrTranslationType { get; set; }

        [RadioReportId("spi_m_060402", InstanceName = nameof(BonesFindingType.Fracture))]
        public int? Rotation { get; set; }

        [RadioReportId("spi_m_060406", InstanceName = nameof(BonesFindingType.Fracture))]
        public int? Translation { get; set; }
        #endregion

        #region FRACTURE_C1
        public GehweilerType GehweilerType { get; set; }

        public SideType SideType { get; set; }

        [RadioReportId("spi_m_060412", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SideType.Right))]
        public bool IsRightVertebralArteryDetectable { get; set; }

        [RadioReportId("spi_m_060414", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(SideType.Left))]
        public bool IsLeftVertebralArteryDetectable { get; set; }
        #endregion

        #region FRACTURE_C2

        public C1C2FractureType C1C2FractureType { get; set; }

        public C2FractureType C2FractureType { get; set; }

        public DensityType DensityType { get; set; }

        public AxisArcType AxisArcType { get; set; }

        [RadioReportId("spi_m_060572", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsStability { get; set; }

        public StabilityType StabilityType { get; set; }

        public C1ToC2FractureType C1ToC2FractureType { get; set; }
        #endregion

        #region FRACTURE_C3
        public C3FractureType C3FractureType { get; set; }

        public ValuationOfFractureType ValuationOfFractureType { get; set; }

        public C3FractureFormType C3FractureFormType { get; set; }

        public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        [RadioReportId("spi_m_060523", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsSchmorlNode { get; set; }
        #endregion

        #region FRACTURE_OS_SACRUM

        public OsSacrumFractureType OsSacrumFractureType { get; set; }

        public OsSacrumFractureFormType OsSacrumFractureFormType { get; set; }

        #endregion

        #region OS_COCCYGIS

        public OsCoccygisFractureType OsCoccygisFractureType { get; set; }

        #endregion


        #region FRACTURE_COMMON

        public NoSpecType NoSpecType { get; set; }

        #endregion

        #region VERTREBAL_ARCH_PATHOLOGY

        public LocalizationSideType LocalizationSideType { get; set; }

        public LocalizationInTheVertebralArchType LocalizationInTheVertebralArchType { get; set; }

        public ClassificationArcusVertebraeInjuryType ClassificationArcusVertebraeInjuryType { get; set; }

        [RadioReportId("spi_m_060526", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Pediculolysis))]
        [RadioReportId("spi_m_060529", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Spondylolysis))]
        public bool IsLocationInferiorCortex { get; set; }

        [RadioReportId("spi_m_060567", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        public bool IsDeepFractureLine { get; set; }

        [RadioReportId("spi_m_060527", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        public int? MeasurementInMmFromTheInferiorCortex { get; set; }

        [RadioReportId("spi_m_060528", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Pediculolysis))]
        [RadioReportId("spi_m_060531", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Spondylolysis))]
        public bool IsObliqueSagittalFractureLine { get; set; }

        #endregion

        #region POSTTHERAPEUTIC_CHANGE

        [RadioReportId("spi_m_060206", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public bool IsHistoryOfVertebroplastyy { get; set; }

        [RadioReportId("spi_m_060340", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public bool IsHistoryOfSpondylodesis { get; set; }

        public LocalizationSagittalType LocalizationSagittalType { get; set; }

        [RadioReportId("spi_m_0604200", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public bool IsHistoryOfOsteosynthesis { get; set; }

        [RadioReportId("spi_m_0604201", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public SpineLocations SpineLocation3 { get; set; }

        #endregion

        #region TUMOR_FOCAL
        [RadioReportId("spi_m_060346", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public int? Size { get; set; }

        [RadioReportId("spi_m_060542", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsInTheSepta { get; set; }

        [RadioReportId("spi_m_060361", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsDiffuse { get; set; }

        [RadioReportId("spi_m_060484", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public int? MaxThicknessOfCap { get; set; }

        [RadioReportId("spi_m_060487", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsLowSignalOfTheRim { get; set; }

        [RadioReportId("spi_m_060553", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsSclerotic { get; set; }

        [RadioReportId("spi_m_060554", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsSpinalCanalInfiltration { get; set; }

        [RadioReportId("spi_m_060555", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsPedicleDestruction { get; set; }

        [RadioReportId("spi_m_060557", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsInfiltrationOfAdjacentBones { get; set; }

        [RadioReportId("spi_m_060231", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public BonesDiagnosisType DifferentialDiagnosis03 { get; set; }
        #endregion

        #region TUMOR_DIFFUSE
        [RadioReportId("spi_m_060234", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public bool IsHistologyProven { get; set; }

        public HistologySecuredType HistologySecuredType { get; set; }

        [RadioReportId("spi_m_060566", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public bool IsInfiltrationAdjacentSoftTissues { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(SideType.Right) => SideType.ToString() == customConditionId,
                nameof(SideType.Left) => SideType.ToString() == customConditionId,
                nameof(SpineLocations.C0) => SpineLocation.ToString() == customConditionId,
                nameof(SpineLocations.C1) => SpineLocation.ToString() == customConditionId,
                nameof(SpineLocations.C2) => SpineLocation.ToString() == customConditionId,
                nameof(SpineLocations.OsSacrum) => SpineLocation.ToString() == customConditionId,
                nameof(SpineLocations.OsCoccygis) => SpineLocation.ToString() == customConditionId,
                ">=" + nameof(SpineLocations.C3) => (ulong)SpineLocation >= (ulong)(SpineLocations.C0 | SpineLocations.C1 | SpineLocations.C2),
                nameof(LocalizationInTheVertebralArchType.Pediculolysis) => LocalizationInTheVertebralArchType.ToString() == customConditionId,
                nameof(LocalizationInTheVertebralArchType.Spondylolysis) => LocalizationInTheVertebralArchType.ToString() == customConditionId,
                nameof(BonesFindingType.FocalTumor) => FindingType.ToString() == customConditionId,
                nameof(BonesFindingType.DiffuseTumor) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}
