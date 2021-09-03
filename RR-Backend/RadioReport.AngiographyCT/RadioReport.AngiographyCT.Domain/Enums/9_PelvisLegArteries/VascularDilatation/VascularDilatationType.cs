using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum VascularDilatationType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0905107", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        AneurysmVerum = 1,

        [RadioReportId("ang_c_0905108", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        AneurysmSpurium = 2,

        [RadioReportId("ang_c_0905109", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        AneurysmDissecans = 3,
    }
}