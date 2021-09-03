using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxMRT.Domain.Enums;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        [RadioReportId("tho_m_080104")]
        public bool IsMRIFollowUp { get; set; }

        public MRIFollowUpType MRIFollowUpType { get; set; }

        [RadioReportId("tho_m_080110")]
        public bool IsBiopsyRecommended { get; set; }

        public BiopsyRecommendedType BiopsyRecommendedType { get; set; }

        [RadioReportId("tho_m_080115")]
        public bool IsEvaluationInInterdisciplinaryBoard { get; set; }

        [RadioReportId("tho_m_080116")]
        public bool IsTumorBoard { get; set; }

        [RadioReportId("tho_m_080117")]
        public bool IsInterstitialLungDisease { get; set; }

        [RadioReportId("tho_m_080201")]
        public bool IsFurtherDiagnostics { get; set; }

        [RadioReportId("tho_m_080203")]
        public bool IsCTThorax { get; set; }

        [RadioReportId("tho_m_080204")]
        public bool IsCTAbdomen { get; set; }

        [RadioReportId("tho_m_080205")]
        public bool IsCTNeck { get; set; }

        [RadioReportId("tho_m_080206")]
        public bool IsMammographyAndBreastUltrasound { get; set; }

        [RadioReportId("tho_m_080207")]
        public bool IsMRIAbdomen { get; set; }

        [RadioReportId("tho_m_080208")]
        public bool IsMRISpine { get; set; }

        [RadioReportId("tho_m_080209")]
        public bool IsMRINeck { get; set; }

        [RadioReportId("tho_m_080210")]
        public bool IsCardiacDiagnostics { get; set; }

        [RadioReportId("tho_m_080211")]
        public bool IsCTAngiography { get; set; }

        [RadioReportId("tho_m_080212")]
        public bool IsCTPA { get; set; }

        [RadioReportId("tho_m_080213")]
        public bool IsPETCT { get; set; }

        [RadioReportId("tho_m_080214")]
        public bool IsSPECT { get; set; }

        [RadioReportId("tho_m_080215")]
        public bool IsBoneScan { get; set; }

        [RadioReportId("tho_m_080302-l", InstanceName = nameof(DynamicFindingsType), IsExportable = false)]
        public DynamicFindingsType DynamicFindingsType { get; set; }

        public TNStagingType TNStagingType { get; set; }

        [RadioReportId("tho_m_080406")]
        public TStageType TStageType { get; set; }

        [RadioReportId("tho_m_080408")]
        public NStageType NStageType { get; set; }

        [RadioReportId("tho_m_080501")]
        public bool IsQuantitativeEvaluationCysticFibrosis { get; set; }

        [RadioReportId("tho_m_080504")]
        public int? ScorePreliminaryExaminationPoints { get; set; }

        [RadioReportId("tho_m_080505-l", InstanceName = nameof(CysticFibrosisDynamicFindingsType), IsExportable = false)]
        public DynamicFindingsType CysticFibrosisDynamicFindingsType { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxMrtSummary;
    }
}
