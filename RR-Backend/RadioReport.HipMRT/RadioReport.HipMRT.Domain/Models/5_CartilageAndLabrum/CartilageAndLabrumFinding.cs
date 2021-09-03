using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.HipMRT.Domain.Enums;

namespace RadioReport.HipMRT.Domain.Models
{
    public class CartilageAndLabrumFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        #region Common

        [RadioReportId("hip_m_050106")]
        public CartilageAndLabrumFindingType FindingType { get; set; }

        public PageType SideType { get; set; }

        [RadioReportId("hip_m_050303", InstanceName = nameof(CartilageAndLabrumFindingType.Labrum))]
        [RadioReportId("hip_m_050204", InstanceName = nameof(CartilageAndLabrumFindingType.CartilageLesion))]
        public CartilageLocalizers CartilageLocalizer { get; set; }

        [RadioReportId("hip_m_050516", InstanceName = nameof(CartilageAndLabrumFindingType.CartilageLesion))]
        [RadioReportId("hip_m_050520", InstanceName = nameof(CartilageAndLabrumFindingType.Labrum))]
        public bool IsAcetabulum { get; set; }

        #endregion
        #region Labrum

        [RadioReportId("hip_m_050301", InstanceName = nameof(CartilageAndLabrumFindingType.Labrum))]
        public bool IsTear { get; set; }

        public CartilageAndLabrumFormType FormType { get; set; }

        [RadioReportId("hip_m_050309", InstanceName = nameof(CartilageAndLabrumFindingType.Labrum))]
        public bool IsFurtherImageFeatures { get; set; }

        [RadioReportId("hip_m_050401", InstanceName = nameof(CartilageAndLabrumFindingType.Labrum))]
        public bool IsDegeneration { get; set; }

        public DegenerationType DegenerationType { get; set; }

        [RadioReportId("hip_m_050404", InstanceName = nameof(CartilageAndLabrumFindingType.Labrum))]
        public bool IsParalabralCyst { get; set; }

        [RadioReportId("hip_m_050405", InstanceName = nameof(CartilageAndLabrumFindingType.Labrum))]
        public int? MaxSizeInMm { get; set; }

        public DifferentialDiagnosis DifferentialDiagnosis { get; set; }

        [RadioReportId("hip_m_050507", InstanceName = nameof(CartilageAndLabrumFindingType.Labrum))]
        public int? InclinationInDegrees { get; set; }

        [RadioReportId("hip_m_050510", InstanceName = nameof(CartilageAndLabrumFindingType.Labrum))]
        public bool IsDysplasia { get; set; }

        [RadioReportId("hip_m_050511", InstanceName = nameof(CartilageAndLabrumFindingType.Labrum))]
        public bool IsFemoralHead { get; set; }

        #endregion
        #region Femoroacetabular Impingment (FAI)

        public MorphologyType MorphologyType { get; set; }

        [RadioReportId("hip_m_050322", InstanceName = nameof(CartilageAndLabrumFindingType.FAI))]
        public bool IsCartilageLesionAnteriorSuperior { get; set; }

        [RadioReportId("hip_m_050323", InstanceName = nameof(CartilageAndLabrumFindingType.FAI))]
        public bool IsChondrolabralSeparation { get; set; }

        [RadioReportId("hip_m_050325", InstanceName = nameof(CartilageAndLabrumFindingType.FAI))]
        public bool IsAcetabularOvercoverage { get; set; }

        [RadioReportId("hip_m_050326", InstanceName = nameof(CartilageAndLabrumFindingType.FAI))]
        public bool IsCartilageLesionPosteriorInferior { get; set; }

        [RadioReportId("hip_m_050333", InstanceName = nameof(CartilageAndLabrumFindingType.FAI))]
        public int? QuantitativeAnalysisAlphaAngleInDegrees { get; set; }

        [RadioReportId("hip_m_050335", InstanceName = nameof(CartilageAndLabrumFindingType.FAI))]
        public bool IsDecreasedOffset { get; set; }

        [RadioReportId("hip_m_050421", InstanceName = nameof(CartilageAndLabrumFindingType.FAI))]
        public bool IsHerniationPitAnterolateralFemoralNeck { get; set; }

        [RadioReportId("hip_m_050422", InstanceName = nameof(CartilageAndLabrumFindingType.FAI))]
        public bool IsFluidIsointense { get; set; }

        [RadioReportId("hip_m_050423", InstanceName = nameof(CartilageAndLabrumFindingType.FAI))]
        public bool IsPeripheralSclerosis { get; set; }

        [RadioReportId("hip_m_050424", InstanceName = nameof(CartilageAndLabrumFindingType.FAI))]
        public bool IsBoneMarrowEdemaAtHeadNeckTransition { get; set; }

        #endregion
        #region Cartilage Lesion 

        public EtiologyType EtiologyType { get; set; }

        public TraumaticType TraumaticType { get; set; }

        public OuterbridgeClassificationType OuterbridgeClassificationType { get; set; }

        [RadioReportId("hip_m_050415", InstanceName = nameof(CartilageAndLabrumFindingType.CartilageLesion))]
        public int? LengthMaxDiameterInMm { get; set; }

        [RadioReportId("hip_m_050522", InstanceName = nameof(CartilageAndLabrumFindingType.CartilageLesion))]
        public bool IsSubchondralCysts { get; set; }

        [RadioReportId("hip_m_050523", InstanceName = nameof(CartilageAndLabrumFindingType.CartilageLesion))]
        public bool IsIntraArticularLooseBody { get; set; }

        [RadioReportId("hip_m_050525", InstanceName = nameof(CartilageAndLabrumFindingType.CartilageLesion))]
        public int? IntraArticularLooseBodyMaxDiameterInMm { get; set; }

        [RadioReportId("hip_m_050518", InstanceName = nameof(CartilageAndLabrumFindingType.CartilageLesion))]
        public bool IsChondrocalcinosis { get; set; }

        [RadioReportId("hip_m_050517", InstanceName = nameof(CartilageAndLabrumFindingType.CartilageLesion))]
        public bool IsFemur { get; set; }

        #endregion

    }
}
