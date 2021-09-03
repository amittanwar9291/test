using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum IntracranialType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100409", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Intracerebral = 1,

        [RadioReportId("ang_c_100410", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Extracerebral = 2,
    }
}