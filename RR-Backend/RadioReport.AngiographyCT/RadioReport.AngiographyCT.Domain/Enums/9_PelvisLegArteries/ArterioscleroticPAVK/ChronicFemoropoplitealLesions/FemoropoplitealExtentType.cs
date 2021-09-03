using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum FemoropoplitealExtentType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090440", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SingularStenosis = 1,

        [RadioReportId("ang_c_090441", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SingularOcclusion = 2,
    }
}