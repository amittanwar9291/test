using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.KneeMRT.Domain.Enums;

namespace RadioReport.KneeMRT.Domain.Models
{
    public class Sequence : SequenceBase
    {
        public override string InstanceName => WeightingType.ToString();

        [RadioReportId("uni_x_030308")]
        public SequenceType SequenceType { get; set; }

        [RadioReportId("uni_y_030401")]
        public bool IsPostContrast { get; set; }
    }
}
