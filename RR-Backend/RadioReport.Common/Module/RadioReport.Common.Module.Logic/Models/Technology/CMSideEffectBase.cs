using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Technology;

namespace RadioReport.Common.Module.Logic.Models.Technology
{
    public abstract class CMSideEffectBase : FindingBase
    {
        public override string InstanceName => CMSideEffectType.ToString();

        [RadioReportId("uni_x_030303")]
        public CMSideEffectType CMSideEffectType { get; set; }

        [RadioReportId("uni_x_030409")]
        public int? MinAfterCMinjection { get; set; }

        [RadioReportId("uni_x_030412")]
        public DurationAdverseReactionType DurationAdverseReactionType { get; set; }

        [RadioReportId("uni_x_030416")]
        public bool IsCompletelyDeclining { get; set; }

        [RadioReportId("uni_x_030406")]
        public bool IsSeriousAdverseEvent { get; set; }
    }
}
