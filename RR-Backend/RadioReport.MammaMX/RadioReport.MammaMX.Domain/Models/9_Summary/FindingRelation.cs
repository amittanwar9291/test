using Newtonsoft.Json;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMX.Domain.Enums.MammographyFinding;
using RadioReport.MammaMX.Domain.Enums.UltrasoundFinding;
using System;
using RadioReport.Common.Module.Logic.Consts;

namespace RadioReport.MammaMX.Domain.Models
{
    public class FindingRelation : FindingBase, IRadioReportIdConditionEvaluator
    {
        public Guid? MammographyFindingId { get; set; }

        // navigation properties are need internaly, but they clutter result json, and rsd response data
        [JsonIgnore]
        [RadioReportId("x", IsExportable = false, CustomConditionName = "x")]
        public MammographyFinding MammographyFinding { get; set; }

        // When user does not select correlation then this is false and UltrasoundFindingId is null
        // When user select "NoCorrelation" in client then this is true and UltrasoundFindingId is null
        // When user select any finding in client then this is false and UltrasoundFindingId is not null
        public bool IsNoCorrelation { get; set; }

        public Guid? UltrasoundFindingId { get; set; }

        // navigation properties are need internaly, but they clutter result json, and rsd response data
        [JsonIgnore]
        [RadioReportId("x", IsExportable = false, CustomConditionName = "x")]
        public UltrasoundFinding UltrasoundFinding { get; set; }

        public override string InstanceName => ReportConsts.CorrelationFinding;

        [RadioReportId("mam_mx_090305")]
        public MammographyFindingType MammographyFindingType => MammographyFinding?.FindingType ?? MammographyFindingType.None;

        // hack: We want correct translation for no correlation option to be taken while generating enum.
        // Unfortunately, due to the way that translation manager works we cannot simply return string, and also C# does not allow for dynamic enum value insertion
        [RadioReportId("mam_mx_090306")]
        public UltrasoundFindingType UltrasoundFindingType =>
            IsNoCorrelation ?
                (UltrasoundFindingType)255 :
                (UltrasoundFinding?.FindingType ?? UltrasoundFindingType.None);

        // Need to stop RadioReportIdAttributeReader from stepping into finding and returning rrids from different page (creating duplicates)
        public bool CheckCondition(string customConditionId) => false;
    }
}
