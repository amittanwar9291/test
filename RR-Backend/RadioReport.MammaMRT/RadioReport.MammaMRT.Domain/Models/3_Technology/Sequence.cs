using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.MammaMRT.Domain.Enums;

namespace RadioReport.MammaMRT.Domain.Models
{
    public class Sequence : SequenceBase
    {
        public override string InstanceName => WeightingType.ToString();

        [RadioReportId("uni_x_030308")]
        public SequenceType SequenceType { get; set; }

        [RadioReportId("uni_x_030319")]
        public bool SiliconeSensitive { get; set; }

        // Silicone suppressed
        [RadioReportId("uni_x_030318")]
        public bool SiliconeSuppressing { get; set; }

        // Dynamics after contrast injection
        [RadioReportId("uni_x_030415")]
        public bool IsDynamicsFollowingGdApplication { get; set; }

        [RadioReportId("uni_x_030419")]
        public bool IsSubtraction { get; set; }

        // Delayed phase
        [RadioReportId("uni_x_030420")]
        public bool IsLateStage { get; set; }
    }
}