using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum NonArterioscleroticPAVKPathologyType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090221", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        Embolism = 1,

        [RadioReportId("ang_c_090222", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        EntrapmentSyndrome = 2,

        [RadioReportId("ang_c_090223", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        CysticAdventitialDegeneration = 3,

        [RadioReportId("ang_c_090224", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        ThrombangiitisObliterans = 4,
    }
}