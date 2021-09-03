using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum TypeADetailsType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090422", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ShortStenosis = 1,

        [RadioReportId("ang_c_090423", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        UniOrBilateralStenosis = 2,   
    }
}