using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum CompartmentType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100466", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        SoftTissues = 1,

        [RadioReportId("ang_c_100467", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        Bone = 2,
    }
}