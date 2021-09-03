using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum ArterioscleroticPAVKPathologyType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090206", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        VascularStenosis = 1,

        [RadioReportId("ang_c_090207", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        VascularPathologyDiffuse = 2,
    }
}