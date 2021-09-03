using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum LengthType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090507", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ShortStenosis = 1,

        [RadioReportId("ang_c_0905103", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        LongStenosis = 2,
    }
}