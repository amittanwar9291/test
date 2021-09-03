using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum FollowUpType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0905112", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        Progression = 1,

        [RadioReportId("ang_c_0905113", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        NoChange = 2,

        [RadioReportId("ang_c_0905114", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        Regression = 3,
    }
}