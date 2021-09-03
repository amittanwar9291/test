using RadioReport.Common.Logic.Attributes;
using RadioReport.ElbowMRT.Domain.Enums;
using System.ComponentModel.DataAnnotations.Schema;
using RadioReport.ElbowMRT.Domain.Enums.SoftTissue;

namespace RadioReport.ElbowMRT.Domain.Models
{
    public class SoftTissueFinding : SoftTissueFindingBase
    {
        #region Common
        public LocalizationRelatedJointSpaceLevelType LocalizationRelatedJointSpaceLevelType { get; set; }

        [RadioReportId("elb_m_070237", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("elb_m_070237", InstanceName = nameof(SoftTissueFindingType.Abcess))]
        [RadioReportId("elb_m_0702212", InstanceName = nameof(SoftTissueFindingType.Aneurysm))]
        [RadioReportId("elb_m_0703220", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public int? MaxDiameterInMm { get; set; }

        public LocalizationAxialType LocalizationAxialType { get; set; }
        #endregion

        // TODO: get common components
        #region SoftTissueTumor
        public DescriptionType DescriptionType { get; set; }

        #region tab 1
        [RadioReportId("elb_m_0702206", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsHistologicallyConfirmed { get; set; }

        public HistologyConfirmedType HistologyConfirmedType { get; set; }

        [RadioReportId("elb_m_070316", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public byte? ExtensionSizeInMm { get; set; }

        [RadioReportId("elb_m_070318", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public byte? ExtensionLevel2InMm { get; set; }

        [RadioReportId("elb_m_070320", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public byte? ExtensionLevel3InMm { get; set; }

        [RadioReportId("elb_m_070506", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsSepta { get; set; }

        [RadioReportId("elb_m_070507", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("elb_m_070508", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsSignalVoids { get; set; }
        #endregion

        #region tab 2
        [RadioReportId("elb_m_070251", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsNoDisplacement { get; set; }

        [RadioReportId("elb_m_070252", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsAlongTheTendonSheath { get; set; }

        [RadioReportId("elb_m_070254", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("elb_m_070256", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsCutisThickening { get; set; }
        #endregion

        #region tab 3
        [RadioReportId("elb_m_070260", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public SoftTissueDifferentialDiagnosisType DifferentialDiagnosis1Type { get; set; }

        [RadioReportId("elb_m_0702210", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsSuspectedDiagnosis { get; set; }

        [RadioReportId("elb_m_070262", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public SoftTissueDifferentialDiagnosisType DifferentialDiagnosis2Type { get; set; }

        [RadioReportId("elb_m_070263", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsSecondary { get; set; }

        [RadioReportId("elb_m_070265", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public SoftTissueDifferentialDiagnosisType DifferentialDiagnosis3Type { get; set; }
        #endregion

        #endregion

        #region Hematoma
        // TODO : resolve model problem
        [RadioReportId("elb_m_0702266", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        public bool IsAnterior { get; set; }

        [RadioReportId("elb_m_0702267", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        public bool IsPosterior { get; set; }

        [RadioReportId("elb_m_0702268", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        public bool IsMedial { get; set; }

        [RadioReportId("elb_m_0702269", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        public bool IsLateral { get; set; }

        public HematomaCharacterizationType HematomaCharacterizationType { get; set; }
        #endregion

        // TODO: get common components
        #region Abcess

        #endregion

        #region ArticularEffusion
        public IntensityType IntensityType { get; set; }

        public AssociatedFindingsType AssociatedFindingsType { get; set; }

        [RadioReportId("elb_m_070207", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        [NotMapped]
        public bool IsExtraarticularArticularEffusion => AssociatedFindingsType == AssociatedFindingsType.CapsuleRupture;

        [RadioReportId("elb_m_0703218", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public bool IsLooseBody { get; set; }

        public ArticularEffusionLocalizationType ArticularEffusionLocalizationType { get; set; }

        [RadioReportId("elb_m_0703226", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public bool IsIsointenseToCartilage { get; set; }

        [RadioReportId("elb_m_0703227", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public bool IsIsointenseToBone { get; set; }

        [RadioReportId("elb_m_0703228", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        public bool IsForeignBody { get; set; }
        #endregion

        #region Bursitis
        public LocalizationType LocalizationType { get; set; }

        [RadioReportId("elb_m_070218", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
        public int? MaxDiameterBursaInMm { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("elb_m_070302", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
        public bool IsDistendedFluidFilledBursa { get; set; }

        [RadioReportId("elb_m_070303", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
        public bool IsEdematous { get; set; }

        [RadioReportId("elb_m_070304", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
        public bool IsInflammatoryChangesOfTheAdjacent { get; set; }

        [RadioReportId("elb_m_070305", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
        public bool IsSecondaryOsteomyelitis { get; set; }

        [RadioReportId("elb_m_070306", InstanceName = nameof(SoftTissueFindingType.Bursitis))]
        public bool IsBursitisCalcarea { get; set; }
        #endregion

        #region Neuritis
        public NeuritisLocalizationType NeuritisLocalizationType { get; set; }

        public NUlnarisType NUlnarisType { get; set; }

        [RadioReportId("elb_m_070230")]
        public bool IsBicipitoradialBursitis { get; set; }

        public NMedianusType NMedianusType { get; set; }

        [RadioReportId("elb_m_070313", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
        public bool IsHypertrophy { get; set; }

        [RadioReportId("elb_m_070307", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
        public bool IsSurroundingFibrosis { get; set; }

        [RadioReportId("elb_m_070308", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
        public bool IsCompression { get; set; }

        public CompressionType CompressionType { get; set; }

        [RadioReportId("elb_m_070311", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
        public bool IsContrastEnhancement { get; set; }
        #endregion

        #region Aneurysm
        public AneurysmLocalizationType AneurysmLocalizationType { get; set; }
        #endregion
    }
}
