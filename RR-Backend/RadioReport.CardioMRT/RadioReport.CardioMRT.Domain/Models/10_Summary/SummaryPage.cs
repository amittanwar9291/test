using RadioReport.CardioMRT.Domain.Enums.Summary;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.CardioMRT.Domain.Models
{
    [GeneratedControllerPageModel("CardioMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        [RadioReportId("car_m_100104")]
        public SummaryDifferentialDiagnosisType DifferentialDiagnosis01 { get; set; }

        [RadioReportId("car_m_100105")]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("car_m_100106")]
        public bool IsEvaluationARVCAccordingToTaskForceCriteria { get; set; }

        [RadioReportId("car_m_100107")]
        public bool IsMajorCriteria { get; set; }

        [RadioReportId("car_m_100108")]
        public bool IsMinorCriteria { get; set; }

        [RadioReportId("car_m_100109")]
        public bool IsDifferentialDiagnosisTo01 { get; set; }

        [RadioReportId("car_m_100110")]
        public SummaryDifferentialDiagnosisType DifferentialDiagnosisTo01 { get; set; }

        [RadioReportId("car_m_100111")]
        public bool IsSubordinated { get; set; }

        [RadioReportId("car_m_100201")]
        public bool IsDifferentialDiagnosis02 { get; set; }

        [RadioReportId("car_m_100202")]
        public SummaryDifferentialDiagnosisType DifferentialDiagnosis02 { get; set; }
        
        [RadioReportId("car_m_100302")]
        public bool IsCoronaryCTAngiography { get; set; }

        [RadioReportId("car_m_100303")]
        public bool IsCTAngiographyThoracicAorta { get; set; }

        [RadioReportId("car_m_100312")]
        public bool IsCTAngiographyOfThePulmonaryArtery { get; set; }

        [RadioReportId("car_m_100304")]
        public bool IsCTThorax { get; set; }

        [RadioReportId("car_m_100305")]
        public bool IsContrastEnhancedThorax { get; set; }

        [RadioReportId("car_m_100306")]
        public bool IsCTAbdomen { get; set; }

        [RadioReportId("car_m_100307")]
        public bool IsContrastEnhancedAbdomen { get; set; }

        [RadioReportId("car_m_100308")]
        public bool IsStressCardiacMRI { get; set; }

        [RadioReportId("car_m_100309")]
        public bool IsMRAngiographyThoracicAorta { get; set; }

        [RadioReportId("car_m_100310")]
        public bool IsMRAbdomen { get; set; }

        [RadioReportId("car_m_100311")]
        public bool IsContrastEnhanced { get; set; }

        [RadioReportId("car_m_100313")]
        public bool IsEchocardiography { get; set; }

        [RadioReportId("car_m_100401")]
        public bool IsMyocardialScintigraphyMyocardialSPEC { get; set; }

        [RadioReportId("car_m_100402")]
        public bool IsUnderStress { get; set; }

        [RadioReportId("car_m_100403")]
        public bool IsCardailePETCT { get; set; }

        [RadioReportId("car_m_100404")]
        public bool IsFollowupCardioMRT { get; set; }

        public FollowUpTime FollowUpTime { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.CardioMrtSummary;
    }
}
