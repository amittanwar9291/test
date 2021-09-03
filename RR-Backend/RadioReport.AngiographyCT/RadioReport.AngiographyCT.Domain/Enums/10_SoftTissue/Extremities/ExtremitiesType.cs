using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum ExtremitiesType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100218", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        Mass = 1,

        [RadioReportId("ang_c_100219", InstanceName = nameof(SoftTissueFindingType.Extremities))]
        Fracture = 2,
    }
}