using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Enums.Summary;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageModel("PelvisMRT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.PelvisMrtSummary;

        public ProcedureType ProcedureType { get; set; }

        [RadioReportId("pel_m_120108")]
        public bool IsCtThorax { get; set; }

        [RadioReportId("pel_m_120109")]
        public bool IsCtAbdomen { get; set; }

        [RadioReportId("pel_m_120110")]
        public bool IsMriAbdomen { get; set; }

        [RadioReportId("pel_m_120111")]
        public bool IsPetCt { get; set; }

        [RadioReportId("pel_m_120112")]
        public bool IsSpectCt { get; set; }

        [RadioReportId("pel_m_120113")]
        public bool IsSkeletalScintigraphy { get; set; }
        
        [RadioReportId("pel_m_120105")]
        public MRIFollowUpType MRIFollowUpType { get; set; }

        [RadioReportId("pel_m_120114")]
        public bool IsBiopsyRecommended { get; set; }

        public BiopsyRecommendedType BiopsyRecommendedType { get; set; }

        [RadioReportId("pel_m_120117")]
        public bool IsEvaluationInInterdisciplinaryTumorBoard { get; set; }

        [RadioReportId("pel_m_120207")]
        public int? PiradsScoreTotal { get; set; }

        public TNStagingType TNStagingType {get; set;}
        
        public DynamicsOfFinding DynamicsOfFinding { get; set; }
        
        public TumorRegressionGradeTRG TumorRegressionGradeTRG { get; set; }

        public ProstateCarcinomaTStageType ProstateCarcinomaTStageType { get; set; }

        public ProstateCarcinomaNStageType ProstateCarcinomaNStageType { get; set; }

        public ProstateCarcinomaMStageType ProstateCarcinomaMStageType { get; set; }

        public BladderCarcinomaTStageType bladderCarcinomaTStageType { get; set; }

        public BladderCarcinomaNStageType BladderCarcinomaNStageType { get; set; }

        public RectalCancerTStageType RectalCancerTStageType { get; set; }

        public RectalCancerNStageType RectalCancerNStageType { get; set; }

        public SigmoidColonTStageType SigmoidColonTStageType { get; set; }

        public SigmoidColonNStageType SigmoidColonNStageType { get; set; }
    }
}
