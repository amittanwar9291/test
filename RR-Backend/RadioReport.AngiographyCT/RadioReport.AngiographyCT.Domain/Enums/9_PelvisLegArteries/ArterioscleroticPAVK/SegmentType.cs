using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum SegmentType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0903105", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ProximalThird = 1,

        [RadioReportId("ang_c_0903106", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        MiddleThird = 2,

        [RadioReportId("ang_c_0903107", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        DistalThird = 3,
    }
}