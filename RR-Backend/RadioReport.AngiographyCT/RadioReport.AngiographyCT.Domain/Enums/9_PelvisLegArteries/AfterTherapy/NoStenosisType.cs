using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum NoStenosisType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0903127", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        IntactAndNoStenosis = 1,

        [RadioReportId("ang_c_0903128", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        ReStenosis = 2,

        [RadioReportId("ang_c_0903129", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        InStentStenosis = 3,

        [RadioReportId("ang_c_0903130", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Occlusion = 4,
    }
}