using RadioReport.AbdomenMRT.Domain.Enums.Summary;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageModel("AbdomenMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtSummary;

        #region Course Tab
        
        public CourseType CourseType { get; set; }

		[RadioReportId("abd_m_120109")]
		public bool IsQuantity { get; set; }

		[RadioReportId("abd_m_120110")]
		public bool IsSize { get; set; }

		public RemissionDetailsType RemissionDetailsType { get; set; }

		[RadioReportId("abd_m_120204")]
		public bool IsCt { get; set; }

		[RadioReportId("abd_m_120205")]
		public bool IsWithIVContrastAgent { get; set; }

		[RadioReportId("abd_m_120207")]
		public bool IsArterialPhase { get; set; }

		[RadioReportId("abd_m_120208")]
		public bool IsPortalVenousPhase { get; set; }

		[RadioReportId("abd_m_120209")]
		public bool IsUrographicPhase { get; set; }

		[RadioReportId("abd_m_120210")]
		public bool IsNonEnhanced { get; set; }

		[RadioReportId("abd_m_120211")]
		public bool IsContrastEnhancedMri { get; set; }

		[RadioReportId("abd_m_120213")]
		public bool IsHepatocyteSpecificContrastAgent { get; set; }

		[RadioReportId("abd_m_120214")]
		public bool IsMRCP { get; set; }

		[RadioReportId("abd_m_120302")]
		public bool IsUltrasoundExamination { get; set; }

		[RadioReportId("abd_m_120304")]
		public bool IsContrastEnhancedUltrasoundExaminationCeus { get; set; }

		[RadioReportId("abd_m_120305")]
		public bool IsTransesophageal { get; set; }

		[RadioReportId("abd_m_120306")]
		public bool IsTransrectal { get; set; }

		[RadioReportId("abd_m_120307")]
		public bool IsTransvaginal { get; set; }

		[RadioReportId("abd_m_120308")]
		public bool IsFollowUp { get; set; }

        [RadioReportId("abd_m_120310")]
        public PeriodType PeriodType { get; set; }

		[RadioReportId("abd_m_120402")]
		public bool IsGastroscopy { get; set; }

		[RadioReportId("abd_m_120403")]
		public bool IsERCP { get; set; }

		[RadioReportId("abd_m_120404")]
		public bool IsColonoscopy { get; set; }

		[RadioReportId("abd_m_120405")]
		public bool IsBiopsy { get; set; }

		[RadioReportId("abd_m_120406")]
		public bool IsSonographicallyGuided { get; set; }

		[RadioReportId("abd_m_120407")]
		public bool IsCTGuided { get; set; }

		[RadioReportId("abd_m_120408")]
		public bool IsMriGuided { get; set; }

		[RadioReportId("abd_m_120409")]
		public bool IsOpen { get; set; }

		[RadioReportId("abd_m_120410")]
		public bool IsDrainage { get; set; }

		[RadioReportId("abd_m_120411")]
		public bool IsPercutaneous { get; set; }

		[RadioReportId("abd_m_120412")]
		public bool IsTransgastric { get; set; }

		[RadioReportId("abd_m_120413")]
		public bool IsTranshepatic { get; set; }

		[RadioReportId("abd_m_120414")]
		public bool IsPTCD { get; set; }

		[RadioReportId("abd_m_120501")]
		public bool IsClinicalCorrelation { get; set; }

		[RadioReportId("abd_m_120502")]
		public bool IsCorrelationWithLaboratoryFindings { get; set; }

		[RadioReportId("abd_m_120503")]
		public bool IsInterdisciplinaryDiscussionInTumourBoard { get; set; }

		[RadioReportId("abd_m_120504")]
		public bool IsRecommendedConsultation { get; set; }

		[RadioReportId("abd_m_120505")]
		public bool IsInternalMedicine { get; set; }

		[RadioReportId("abd_m_120506")]
		public bool IsSurgery { get; set; }

		[RadioReportId("abd_m_120507")]
		public bool IsEndocrinology { get; set; }

		[RadioReportId("abd_m_120508")]
		public bool IsGynecology { get; set; }

		[RadioReportId("abd_m_120509")]
		public bool IsUrology { get; set; }
        #endregion
        #region TNM classification Tab
        
        [RadioReportId("abd_m_120113")]
        public TStageType TStageType { get; set; }
        
        public TStageSubType TStageSubType { get; set; }
        
        [RadioReportId("abd_m_120216")]
        public NStageType NStageType { get; set; }
        
        public NStageSentinelNodeType NStageSentinelNodeType { get; set; }
        
        public NStageSubType NStageSubType { get; set; }
        
        [RadioReportId("abd_m_120312")]
        public MStageType MStageType { get; set; }
        
        [RadioReportId("abd_m_120314")]
        public bool IsPUL { get; set; }
        
        [RadioReportId("abd_m_120315")]
        public bool IsMAR { get; set; }
        
        [RadioReportId("abd_m_120316")]
        public bool IsOSS { get; set; }
        
        [RadioReportId("abd_m_120317")]
        public bool IsPLE { get; set; }
        
        [RadioReportId("abd_m_120318")]
        public bool IsHEP { get; set; }
        
        [RadioReportId("abd_m_120319")]
        public bool IsPER { get; set; }
        
        [RadioReportId("abd_m_120320")]
        public bool IsBRA { get; set; }
        
        [RadioReportId("abd_m_120321")]
        public bool IsADR { get; set; }
        
        [RadioReportId("abd_m_120322")]
        public bool IsLYM { get; set; }
        
        [RadioReportId("abd_m_120323")]
        public bool IsSKI { get; set; }
        
        [RadioReportId("abd_m_120324")]
        public bool IsOTH { get; set; }
        
        public MStageSubType MStageSubType { get; set; }
        
        [RadioReportId("abd_m_120416")]
        public GradingType GradingType { get; set; }
        
        [RadioReportId("abd_m_120512")]
        public FurtherParametersDetailsType FurtherParametersDetailsType { get; set; }
        
        [RadioReportId("abd_m_120514")]
        public FurtherParametersRResidualType FurtherParametersRResidualType { get; set; }
        
        [RadioReportId("abd_m_120516")]
        public FurtherParametersLymphaticInvasionType FurtherParametersLymphaticInvasionType { get; set; }
        
        [RadioReportId("abd_m_120518")]
        public FurtherParametersVenousInvasionType FurtherParametersVenousInvasionType { get; set; }
        
        [RadioReportId("abd_m_120520")]
        public FurtherParametersPerineuralInvasionType FurtherParametersPerineuralInvasionType { get; set; }
        
        #endregion
        #region Li-RADS Tab
        
        [RadioReportId("abd_m_120118")]
        public LiRADSCategoryType LiRADSCategoryType { get; set; }
        
        public LiRADSTreatmentResponseCategoryType LiRADSTreatmentResponseCategoryType { get; set; }
        
        #endregion
    }
}
