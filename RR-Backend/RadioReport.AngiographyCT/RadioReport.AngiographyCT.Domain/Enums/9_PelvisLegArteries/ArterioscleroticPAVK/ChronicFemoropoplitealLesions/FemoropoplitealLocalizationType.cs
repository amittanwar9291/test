using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum FemoropoplitealLocalizationType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090436", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        CommonFemoralArtery = 1,

        [RadioReportId("ang_c_090437", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SuperficialFemoralArtery = 2,

        [RadioReportId("ang_c_090438", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        PoplitealArtery = 3,
    }
}