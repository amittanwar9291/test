using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Enums;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    public class RotatorFinding : FindingWithImageBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => Type.ToString();

        [RadioReportId("sho_m_050110")]
        public RotatorFindingType Type { get; set; }

        [RadioReportId("uni_05_007l", InstanceName = "ShoulderMRT.RotatorFinding", IsExportable = false)]
        public override ImageFile UploadedImageFile { get; set; }

        [RadioReportId("uni_05_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_05_005")]
        public string PictureNumber { get; set; }

        public AfflicationType AfflicationType { get; set; }

        [RadioReportId("sho_m_050208", InstanceName = nameof(RotatorFindingType.ACJoint))]
        public bool IsApophysitis { get; set; }

        [RadioReportId("sho_m_050301", InstanceName = nameof(RotatorFindingType.ACJoint))]
        public bool IsOsteophytes { get; set; }

        [RadioReportId("sho_m_050302", InstanceName = nameof(RotatorFindingType.ACJoint))]
        public bool IsCapsularHypertrophy { get; set; }

        [RadioReportId("sho_m_050303", InstanceName = nameof(RotatorFindingType.ACJoint))]
        public bool IsSubchondralCysts { get; set; }

        [RadioReportId("sho_m_050304", InstanceName = nameof(RotatorFindingType.ACJoint))]
        public bool IsSubchondralEdema { get; set; }

        [RadioReportId("sho_m_050305", InstanceName = nameof(RotatorFindingType.ACJoint))]
        public bool IsArticularEffusion { get; set; }

        [RadioReportId("sho_m_050306", InstanceName = nameof(RotatorFindingType.ACJoint))]
        public bool IsSclerosis { get; set; }

        [RadioReportId("sho_m_050307", InstanceName = nameof(RotatorFindingType.ACJoint))]
        public bool IsOsteolysisOrLateralClavicles { get; set; }

        [RadioReportId("sho_m_050308", InstanceName = nameof(RotatorFindingType.ACJoint))]
        public bool IsCorticalThinning { get; set; }

        [RadioReportId("sho_m_050309", InstanceName = nameof(RotatorFindingType.ACJoint))]
        public bool IsCorticalBoneErosion { get; set; }

        public ACJointClassificationType ACJointClassificationType { get; set; }

        public TossyType TossyType { get; set; }

        public RockwoodType RockwoodType { get; set; }

        public LesionType LesionType { get; set; }

        public PartialLesionLocationType PartialLesionLocationType { get; set; }

        public TendonPartType TendonPartType { get; set; }

        public PartialRuptureType PartialRuptureType { get; set; }

        public PatteClassificationType PatteClassificationType { get; set; }

        [RadioReportId("sho_m_050414", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        public bool IsTendonRetraction { get; set; }

        public TendonRetractionClassificationType TendonRetractionClassificationType { get; set; }

        [RadioReportId("sho_m_0504225", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        public bool IsAccordingToBayneAndBateman { get; set; }

        public TendonRetractionBayneClassificationType TendonRetractionBayneClassificationType { get; set; }

        public TendonRetractionClassificationByPatentType TendonRetractionClassificationByPatentType { get; set; }

        [RadioReportId("sho_m_050501", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        public bool IsAtrophy { get; set; }

        [RadioReportId("sho_m_050525", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        public bool IsAccordingToGoutallier { get; set; }

        public AtrophyClassificationType AtrophyClassificationType { get; set; }

        public ClassificationAccGoutallierType ClassificationAccGoutallierType { get; set; }

        public ClassificationAccZanettiType ClassificationAccZanettiType { get; set; }

        public CrossType CrossType { get; set; }

        public LengthwiseType Lengthwise { get; set; }

        public BursaSideType BursaSideType { get; set; }

        public InsertionOrFootprintType InsertionOrFootprintType { get; set; }

        [RadioReportId("sho_m_0505203", InstanceName = nameof(RotatorFindingType.RotatorCuff), CustomConditionName = nameof(PartialLesionLocationType.Supraspinatus))]
        [RadioReportId("sho_m_0504232", InstanceName = nameof(RotatorFindingType.RotatorCuff), CustomConditionName = nameof(PartialLesionLocationType.Infraspinatus) + nameof(PartialLesionLocationType.TeresMinor))]
        public int? ExpansivenessLengthInMM { get; set; }

        [RadioReportId("sho_m_0505205", InstanceName = nameof(RotatorFindingType.RotatorCuff), CustomConditionName = nameof(PartialLesionLocationType.Supraspinatus))]
        [RadioReportId("sho_m_0504234", InstanceName = nameof(RotatorFindingType.RotatorCuff), CustomConditionName = nameof(PartialLesionLocationType.Infraspinatus) + nameof(PartialLesionLocationType.TeresMinor))]
        public int? ExpansivenessDepthInMM { get; set; }

        public RotatorCuffClassificationType RotatorCuffClassificationType { get; set; }

        public BayneClassificationType ClassificationBayneClassificationType { get; set; }

        public SnyderClassificationType ClassificationSnyderClassificationType { get; set; }

        public LafosseClassificationType LafosseClassificationType { get; set; }

        public PartialLesionUpperThirdType PartialLesionUpperThirdType { get; set; }

        public LocalizationLengthwiseType LocalizationType { get; set; }

        public MorphologyType MorphologyType { get; set; }

        [RadioReportId("sho_m_0504239", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        public bool IsSignalIncreaseInPDAndT1w { get; set; }

        [RadioReportId("sho_m_0504240", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        public bool AreHumeralHeadCysts { get; set; }

        [RadioReportId("sho_m_0504241", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        public int? CystsAtTheHeadOfTheHumerusLargestAxialDiameter { get; set; }

        [RadioReportId("sho_m_0504243", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        public bool CalcificationOrTendinitisCalcarea { get; set; }

        [RadioReportId("sho_m_0504244", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        public int? LimeOrTendinitisCalcareaLargestAxialDiameter { get; set; }

        [RadioReportId("sho_m_0504246", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        public bool IsOsteitis { get; set; }

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(PartialLesionLocationType.Supraspinatus) => PartialLesionLocationType == PartialLesionLocationType.Supraspinatus,
                nameof(PartialLesionLocationType.Infraspinatus) + nameof(PartialLesionLocationType.TeresMinor) => PartialLesionLocationType == PartialLesionLocationType.Infraspinatus || PartialLesionLocationType == PartialLesionLocationType.TeresMinor,
                _ => false
            };
    }
}
