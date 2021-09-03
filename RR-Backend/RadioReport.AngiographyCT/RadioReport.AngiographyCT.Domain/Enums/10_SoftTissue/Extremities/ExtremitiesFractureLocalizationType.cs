using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum ExtremitiesFractureLocalizationType : byte
    {
        None = 0,

        [RadioReportId("ang_c_1003106", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        Humerus = 1,

        [RadioReportId("ang_c_1003107", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        Radius = 2,

        [RadioReportId("ang_c_1003108", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        Ulna = 3,

        [RadioReportId("ang_c_1003109", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        Carpalia = 4,

        [RadioReportId("ang_c_1003110", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        Metacarpalia = 5,

        [RadioReportId("ang_c_1003111", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        PhalangesUpperExtremity = 6,

        [RadioReportId("ang_c_1003112", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        Femur = 7,

        [RadioReportId("ang_c_1003113", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        Tibia = 8,

        [RadioReportId("ang_c_1003114", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        Fibula = 9,

        [RadioReportId("ang_c_1003115", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        TarsalBones = 10,

        [RadioReportId("ang_c_1003116", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        MetatarsalBones = 11,

        [RadioReportId("ang_c_1003117", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        PhalangesOfTheLowerExtremity = 12,   
    }
}