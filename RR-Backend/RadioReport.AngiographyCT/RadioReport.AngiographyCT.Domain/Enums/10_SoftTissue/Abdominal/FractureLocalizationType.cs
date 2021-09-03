using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum FractureLocalizationType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100394", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Spine = 1,

        [RadioReportId("ang_c_100395", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Pelvis = 2,

        [RadioReportId("ang_c_100396", InstanceName = nameof(SoftTissueFindingType.Abdominal))]
        Ribs = 3,
    }
}