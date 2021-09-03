using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Enums.Summary;

namespace RadioReport.NeckMRT.Domain.Models
{
    [GeneratedControllerPageModel("NeckMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.NeckMrtSummary;
        

		[RadioReportId("nec_m_110106")]
		public bool IsContrastEnhancedMriNeck { get; set; }

		[RadioReportId("nec_m_110107")]
		public bool IsBrainMri { get; set; }

		[RadioReportId("nec_m_110108")]
		public bool IsOrbitaMri { get; set; }

		[RadioReportId("nec_m_110109")]
		public bool IsTemporomandibularJointsMri { get; set; }

		[RadioReportId("nec_m_110110")]
		public bool IsTofMrAngiography { get; set; }

		[RadioReportId("nec_m_110111")]
		public bool IsMrAngiographyIntracranial { get; set; }

		[RadioReportId("nec_m_110112")]
		public bool IsMrAngiographyExtracranial { get; set; }

		[RadioReportId("nec_m_110113")]
		public bool IsMriCervicalSpine { get; set; }

		[RadioReportId("nec_m_110202")]
		public bool IsCct { get; set; }

		[RadioReportId("nec_m_110203")]
		public bool IsCtAngiographyIntracranial { get; set; }

		[RadioReportId("nec_m_110204")]
		public bool IsCtAngiographyExtracranial { get; set; }

		[RadioReportId("nec_m_110205")]
		public bool IsCtPetrousBone { get; set; }

		[RadioReportId("nec_m_110206")]
		public bool IsParanasalSinusCt { get; set; }

		[RadioReportId("nec_m_110207")]
		public bool IsCtNeck { get; set; }

		[RadioReportId("nec_m_110208")]
		public bool IsDentalCtDvt { get; set; }

		[RadioReportId("nec_m_110209")]
		public bool IsCtThorax { get; set; }

		[RadioReportId("nec_m_110211")]
		public bool IsPetCt { get; set; }

		[RadioReportId("nec_m_110212")]
		public bool IsSpectCt { get; set; }

		[RadioReportId("nec_m_110213")]
		public bool IsBoneScintigraphy { get; set; }

		[RadioReportId("nec_m_110302")]
        public MRIFollowUpType MRIFollowUpType { get; set; }

		[RadioReportId("nec_m_110304")]
		public bool IsBiopsy { get; set; }
		public BiopsyType BiopsyType { get; set; }

		[RadioReportId("nec_m_110308")]
		public bool IsEvaluationInInterdisciplinaryTumorBoard { get; set; }
		public DynamicsOfFindingsType DynamicsOfFindingsType { get; set; }

        public IEnumerable<TNMClassification> TNMClassifications { get; set; }

    }
}
