using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum BypassType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090231", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Anatomical = 1,

        [RadioReportId("ang_c_090232", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        ExtraAnatomical = 2,
    }
}