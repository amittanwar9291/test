using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum EntrapmentSyndromeType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090350", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        TypeI = 1,

        [RadioReportId("ang_c_090351", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        TypeII = 2,

        [RadioReportId("ang_c_090352", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        TypeIII = 3,

        [RadioReportId("ang_c_090353", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        TypeIV = 4,

        [RadioReportId("ang_c_090354", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        TypeVI = 5,
    }
}