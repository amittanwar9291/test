using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum NeckSoftTissuePathologyType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100310", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Mass = 1,

        [RadioReportId("ang_c_100311", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Goiter = 2,

        [RadioReportId("ang_c_100312", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        CervicalSpineFracture = 3,
    }
}