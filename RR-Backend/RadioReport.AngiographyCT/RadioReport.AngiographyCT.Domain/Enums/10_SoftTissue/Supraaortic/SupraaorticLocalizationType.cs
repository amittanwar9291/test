using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum SupraaorticLocalizationType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100203", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        Head = 1,

        [RadioReportId("ang_c_100204", InstanceName = nameof(SoftTissueFindingType.Supraaortic))]
        NeckSoftTissue = 2,
    }
}