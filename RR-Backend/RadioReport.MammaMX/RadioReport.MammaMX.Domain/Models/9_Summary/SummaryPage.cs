using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMX.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.MammaMX.Domain.Models
{
    [GeneratedControllerPageModel("MammaMX/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>, IRadioReportIdConditionEvaluator
    {
        public override string PageTypeName => PageTypeNames.MammaMxSummary;

        [RadioReportId("mam_mx_090104")]
        public char? ParenchymaDensityRight { get; set; }

        [RadioReportId("mam_mx_090106")]
        public char? ParenchymaDensityLeft { get; set; }

        [RadioReportId("mam_mx_090109")]
        public byte? RightBiRads { get; set; }

        [RadioReportId("mam_mx_090114-l", InstanceName = nameof(RightBiRadsMultifocalType), IsExportable = false)]
        public BiRadsMultifocalType RightBiRadsMultifocalType { get; set; }

        [RadioReportId("mam_mx_090117-l", InstanceName = nameof(RightBiRadsMulticentricType), IsExportable = false)]
        public BiRadsMulticentricType RightBiRadsMulticentricType { get; set; }

        [RadioReportId("mam_mx_090201-l", InstanceName = nameof(RightBiRadsLevel4Type), IsExportable = false)]
        public BiRadsLevel4Type RightBiRadsLevel4Type { get; set; }

        [RadioReportId("mam_mx_090111")]
        public byte? LeftBiRads { get; set; }

        [RadioReportId("mam_mx_090119-l", InstanceName = nameof(LeftBiRadsMultifocalType), IsExportable = false)]
        public BiRadsMultifocalType LeftBiRadsMultifocalType { get; set; }

        [RadioReportId("mam_mx_090121-l", InstanceName = nameof(LeftBiRadsMulticentricType), IsExportable = false)]
        public BiRadsMulticentricType LeftBiRadsMulticentricType { get; set; }

        [RadioReportId("mam_mx_090204-l", InstanceName = nameof(LeftBiRadsLevel4Type), IsExportable = false)]
        public BiRadsLevel4Type LeftBiRadsLevel4Type { get; set; }

        public IEnumerable<FindingRelation> FindingRelations { get; set; }

        public CourseOfDiseaseType CourseOfDiseaseType { get; set; }

        [RadioReportId("mam_mx_090502")]
        public ProcedureFindingType ProcedureFindingType { get; set; }

        [RadioReportId("mam_mx_090504l", CustomConditionName = nameof(ProcedureFindingType.Biopsy), IsExportable = false)]
        public BiopsyLocalizationType BiopsyLocalizationType { get; set; }

        [RadioReportId("mam_mx_090509l", CustomConditionName = nameof(ProcedureFindingType.Biopsy), IsExportable = false)]
        public BiopsyModalityType BiopsyModalityType { get; set; }

        [RadioReportId("mam_mx_090511")]
        public bool IsStereotactic { get; set; }

        [RadioReportId("mam_mx_090512")]
        public bool IsVacuumPunchBiopsy { get; set; }

        [RadioReportId("mam_mx_090515")]
        public bool IsUltrasound { get; set; }

        [RadioReportId("mam_mx_090516")]
        public ExtendedDateType UltrasoundDate { get; set; }

        [RadioReportId("mam_mx_090518")]
        public UltrasoundStrategy UltrasoundStrategy { get; set; }

        [RadioReportId("mam_mx_090519")]
        public bool IsMammography { get; set; }

        [RadioReportId("mam_mx_090520")]
        public DateType MammographyDate { get; set; }

        [RadioReportId("mam_mx_090522")]
        public MammographyStrategy MammographyStrategy { get; set; }

        [RadioReportId("mam_mx_090523")]
        public bool IsMRI { get; set; }

        [RadioReportId("mam_mx_090524")]
        public DateType MRIDate { get; set; }

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(ProcedureFindingType.Biopsy) => ProcedureFindingType == ProcedureFindingType.Biopsy,
                _ => false
            };
    }
}
