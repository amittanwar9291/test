using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum AfterTherapyType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090226", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        PTA = 1,

        [RadioReportId("ang_c_090227", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Stent = 2,

        [RadioReportId("ang_c_090228", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Lysis = 3,

        [RadioReportId("ang_c_090229", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        AneurysmSurgery = 4,

        [RadioReportId("ang_c_090230", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Bypass = 5,
    }
}