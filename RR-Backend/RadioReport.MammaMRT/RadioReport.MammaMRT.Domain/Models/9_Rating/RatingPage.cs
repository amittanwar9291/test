using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMRT.Domain.Enums.Rating;

namespace RadioReport.MammaMRT.Domain.Models
{
    [GeneratedControllerPageModel("MammaMRT/Rating")]
    public class RatingPage : PageModelBase<RatingPage>
    {
        public override string PageTypeName => PageTypeNames.MammaMrtRating;

        [RadioReportId("mam_m_090105")]
        public int ACRDensityIndex { get; set; }

        [RadioReportId("mam_m_090109")]
        public byte? RightBiRads { get; set; }

        [RadioReportId("mam_m_090114-l", InstanceName = nameof(RightBiRadsMultifocalType), IsExportable = false)]
        public BiRadsMultifocalType RightBiRadsMultifocalType { get; set; }

        [RadioReportId("mam_m_090117-l", InstanceName = nameof(RightBiRadsMulticentricType), IsExportable = false)]
        public BiRadsMulticentricType RightBiRadsMulticentricType { get; set; }

        [RadioReportId("mam_m_090201-l", InstanceName = nameof(RightBiRadsLevel4Type), IsExportable = false)]
        public BiRadsLevel4Type RightBiRadsLevel4Type { get; set; }

        [RadioReportId("mam_m_090111")]
        public byte? LeftBiRads { get; set; }

        [RadioReportId("mam_m_090119-l", InstanceName = nameof(LeftBiRadsMultifocalType), IsExportable = false)]
        public BiRadsMultifocalType LeftBiRadsMultifocalType { get; set; }

        [RadioReportId("mam_m_090121-l", InstanceName = nameof(LeftBiRadsMulticentricType), IsExportable = false)]
        public BiRadsMulticentricType LeftBiRadsMulticentricType { get; set; }

        [RadioReportId("mam_m_090204-l", InstanceName = nameof(LeftBiRadsLevel4Type), IsExportable = false)]
        public BiRadsLevel4Type LeftBiRadsLevel4Type { get; set; }

        public FurtherActionType FurtherActionType { get; set; }

        [RadioReportId("mam_m_090309")]
        public bool IsEvaluationInTumorBoard { get; set; }

        [RadioReportId("mam_m_090310")]
        public bool IsBreastSurgeryConsultation { get; set; }

        #region actiontype Biopsy
        public BiopsyLocalizationType BiopsyLocalizationType { get; set; }

        public BiopsyModalityType BiopsyModalityType { get; set; }
        #endregion

        #region actiontype Control
        [RadioReportId("mam_m_090418")]
        public bool IsUltrasound { get; set; }
        [RadioReportId("mam_m_090410-l", InstanceName = nameof(UltrasoundDateType), IsExportable = false)]
        public DateType UltrasoundDateType { get; set; }
        [RadioReportId("mam_m_090414-l", InstanceName = nameof(UltrasoundLocationType), IsExportable = false)]
        public LocationType UltrasoundLocationType { get; set; }

        [RadioReportId("mam_m_090501")]
        public bool IsMammography { get; set; }
        [RadioReportId("mam_m_090502-l", InstanceName = nameof(MammographyDateType), IsExportable = false)]
        public DateType MammographyDateType { get; set; }
        [RadioReportId("mam_m_090505-l", InstanceName = nameof(MammographyLocationType), IsExportable = false)]
        public LocationType MammographyLocationType { get; set; }

        [RadioReportId("mam_m_090508")]
        public bool IsMRI { get; set; }
        [RadioReportId("mam_m_090509-l", InstanceName = nameof(MRIDateType), IsExportable = false)]
        public DateType MRIDateType { get; set; }
        #endregion


    }
}
