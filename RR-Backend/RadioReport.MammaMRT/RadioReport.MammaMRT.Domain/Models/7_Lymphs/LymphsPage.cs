using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMRT.Domain.Enums.Lymphs;

namespace RadioReport.MammaMRT.Domain.Models
{
    [GeneratedControllerPageModel("MammaMRT/Lymphs")]
    public class LymphsPage : PageModelBase<LymphsPage>
    {
        public AxillaryLymphNodesType AxillaryLymphNodesType { get; set; }

        [RadioReportId("mam_m_070106")]
        public bool IsRightAxillary { get; set; }

        [RadioReportId("mam_m_070107")]
        public int? RightAxillaryShortAxis { get; set; }

        [RadioReportId("mam_m_070109")]
        public bool IsRightAxillaryLevelI { get; set; }

        [RadioReportId("mam_m_070110")]
        public bool IsRightAxillaryLevelII { get; set; }

        [RadioReportId("mam_m_070111")]
        public bool IsRightAxillaryLevelIII { get; set; }

        [RadioReportId("mam_m_070112")]
        public bool IsLeftAxillary { get; set; }

        [RadioReportId("mam_m_070113")]
        public int? LeftAxillaryShortAxis { get; set; }

        [RadioReportId("mam_m_070115")]
        public bool IsLeftAxillaryLevelI { get; set; }

        [RadioReportId("mam_m_070116")]
        public bool IsLeftAxillaryLevelII { get; set; }

        [RadioReportId("mam_m_070117")]
        public bool IsLeftAxillaryLevelIII { get; set; }

        public OtherLymphNodesType OtherLymphNodesType { get; set; }

        [RadioReportId("mam_m_070214")]
        public byte? CervicalMaxShortAxisInMm { get; set; }

        [RadioReportId("mam_m_070204")]
        public bool IsRightCervical { get; set; }

        [RadioReportId("mam_m_070205")]
        public bool IsLeftCervical { get; set; }

        [RadioReportId("mam_m_070206")]
        public bool IsRightParasternal { get; set; }

        [RadioReportId("mam_m_070209")]
        public bool IsLeftParasternal { get; set; }

        [RadioReportId("mam_m_070303")]
        public bool IsEnlarged { get; set; }

        [RadioReportId("mam_m_070304")]
        public bool IsThyroidNodule { get; set; }

        public FocalLiverLesionType FocalLiverLesionType { get; set; }

        public LiverLesionBenigneType LiverLesionBenigneType { get; set; }

        [RadioReportId("mam_m_070311")]
        public bool IsOverOneLesionsOfSameEntity { get; set; }

        public LungDiseaseType LungDiseaseType { get; set; }

        [RadioReportId("mam_m_070407")]
        public byte? MaxDiameterAxialInMm { get; set; }

        [RadioReportId("mam_m_070411-l", InstanceName = nameof(RightBreastDetailType), IsExportable = false)]
        public BreastDetailType RightBreastDetailType { get; set; }

        [RadioReportId("mam_m_070414-l", InstanceName = nameof(LeftBreastDetailType), IsExportable = false)]
        public BreastDetailType LeftBreastDetailType { get; set; }

        [RadioReportId("mam_m_070505")]
        public bool IsPleura { get; set; }

        [RadioReportId("mam_m_070506")]
        public bool IsPericardium { get; set; }

        [RadioReportId("mam_m_070507")]
        public bool IsBones { get; set; }

        [RadioReportId("mam_m_070508")]
        public bool IsMediastinum { get; set; }

        [RadioReportId("mam_m_070509")]
        public bool IsSuspected { get; set; }

        public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        [RadioReportId("mam_m_0704100")]
        public bool IsLocalizationRight { get; set; }

        [RadioReportId("mam_m_0704101")]
        public bool IsLocalizationLeft { get; set; }

        public override string PageTypeName => PageTypeNames.MammaMrtLymphs;
    }
}
