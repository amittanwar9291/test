using System.ComponentModel.DataAnnotations.Schema;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Technology;

namespace RadioReport.Common.Module.Logic.Models.Technology
{
    public abstract class SequenceBase : FindingBase
    {
        [RadioReportId("uni_x_030210")]
        public WeightingType WeightingType { get; set; }

        [RadioReportId("uni_x_030310")]
        public OrientationType OrientationType { get; set; }

        // props are used for only import feature, InstanceName is set to value prevent, because it prevents of getting rr-ids
        // by not collecting them for report
        // workaround for bug 19695
        [NotMapped]
        [RadioReportId("imp_y_030300", InstanceName = "prevent")]
        public MagneticFieldStrengthType MagneticFieldStrengthType { get; set; }

        [NotMapped]
        [RadioReportId("imp_y_030301", InstanceName = "prevent")]
        public int InversionTime { get; set; }

        [RadioReportId("uni_x_030314")]
        public bool IsSaturatedFat { get; set; }

        [RadioReportId("uni_x_030315")]
        public bool Is3D { get; set; }

        [RadioReportId("uni_x_030316")]
        public bool IsParallelImaging { get; set; }
    }
}
