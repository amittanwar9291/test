using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxCT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>, IRadioReportIdConditionEvaluator
    {
        [RadioReportId("tho_c_090103")]
        public bool IsProcedure { get; set; }

        [RadioReportId("tho_c_090104")]
        public bool IsCTFollowUp { get; set; }

        public CTFollowUpType CtFollowUpType { get; set; }

        [RadioReportId("tho_c_090110")]
        public bool IsRecommendedBiopsy { get; set; }

        public BiopsyType BiopsyType { get; set; }

        [RadioReportId("tho_c_090114")]
        public bool IsEvaluationOfInterdisciplinaryBoard { get; set; }

        public EvaluationInterdisciplinaryBoardType EvaluationInterdisciplinaryBoardType { get; set; }

        [RadioReportId("tho_c_090201")]
        public bool IsComplementaryExamination { get; set; }

        [RadioReportId("tho_c_090203")]
        public bool IsCTAbdomen { get; set; }

        [RadioReportId("tho_c_090204")]
        public bool IsCTNeck { get; set; }

        [RadioReportId("tho_c_090205")]
        public bool IsMammographyAndBreastUltrasound { get; set; }

        [RadioReportId("tho_c_090206")]
        public bool IsMRIChest { get; set; }

        [RadioReportId("tho_c_090207")]
        public bool IsMRIAbdomen { get; set; }

        [RadioReportId("tho_c_090208")]
        public bool IsMRIThoracicSpine { get; set; }

        [RadioReportId("tho_c_090209")]
        public bool IsMRINeck { get; set; }

        [RadioReportId("tho_c_090210")]
        public bool IsCardiacDiagnostics { get; set; }

        [RadioReportId("tho_c_090211")]
        public bool IsCTAngiography { get; set; }

        [RadioReportId("tho_c_090212")]
        public bool IsCTPA { get; set; }

        [RadioReportId("tho_c_090213")]
        public bool IsPETCT { get; set; }

        [RadioReportId("tho_c_090214")]
        public bool IsSPECT { get; set; }

        [RadioReportId("tho_c_090215")]
        public bool IsBoneScan { get; set; }

        [RadioReportId("tho_c_090301")]
        public bool IsDynamicFindings { get; set; }

        public DynamicFindingsType DynamicFindingsType { get; set; }

        [RadioReportId("tho_c_090306")]
        public bool IsTNStaging { get; set; }

        public TNStagingType TNStagingType { get; set; }

        [RadioReportId("tho_c_090311", CustomConditionName = nameof(TNStagingType.BronchialCarcinoma))]
        [RadioReportId("tho_c_090315", CustomConditionName = nameof(TNStagingType.PleuralMesothelioma))]
        public TStagingLevelType TStagingLevelType { get; set; }

        [RadioReportId("tho_c_090313", CustomConditionName = nameof(TNStagingType.BronchialCarcinoma))]
        [RadioReportId("tho_c_090317", CustomConditionName = nameof(TNStagingType.PleuralMesothelioma))]
        public NStagingLevelType NStagingLevelType { get; set; }

        [RadioReportId("tho_c_090401")]
        public bool IsLungRADS { get; set; }

        [RadioReportId("tho_c_090403")]
        public SignalType SignalType { get; set; }

        [RadioReportId("tho_c_090405")]
        public ScenarioType ScenarioType { get; set; }

        [RadioReportId("tho_c_090406")]
        public bool IsRiskCalculator { get; set; }

        [RadioReportId("tho_c_090411")]
        public int? NumberOfRoundHearths { get; set; }

        [RadioReportId("tho_c_090408", DecimalPlaces = 1)]
        public decimal? CancerProbability { get; set; }

        [RadioReportId("tho_c_090501")]
        public bool IsCOVID19CTGroups { get; set; }

        public COVID19CTGroupsType COVID19CTGroupsType { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxCtSummary;

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(TNStagingType.BronchialCarcinoma) => TNStagingType.ToString() == customConditionId,
                nameof(TNStagingType.PleuralMesothelioma) => TNStagingType.ToString() == customConditionId,
                _ => false
            };
    }
}
