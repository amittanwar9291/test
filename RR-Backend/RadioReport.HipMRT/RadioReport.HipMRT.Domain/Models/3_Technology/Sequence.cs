using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.HipMRT.Technology.Enums;

namespace RadioReport.HipMRT.Domain.Models
{
    public class Sequence : SequenceBase
    {
        [RadioReportId("uni_x_030308")]
        public SequenceType SequenceType { get; set; }

        [RadioReportId("uni_y_030401")]
        public bool IsPostContrast { get; set; }

        public override string InstanceName => WeightingType.ToString();
    }
}
