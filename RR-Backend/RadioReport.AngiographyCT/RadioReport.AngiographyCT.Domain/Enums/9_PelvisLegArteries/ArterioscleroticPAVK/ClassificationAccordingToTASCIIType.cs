using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum ClassificationAccordingToTASCIIType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090209", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ChronicAortoiliacLesions = 1,

        [RadioReportId("ang_c_090210", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ChronicFemoropoplitealLesions = 2,

        [RadioReportId("ang_c_090211", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ChronicCruropedalLesions = 3,
    }
}