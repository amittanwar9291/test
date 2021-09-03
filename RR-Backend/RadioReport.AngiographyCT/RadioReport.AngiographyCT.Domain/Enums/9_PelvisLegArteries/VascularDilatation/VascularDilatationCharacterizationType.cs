using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum VascularDilatationCharacterizationType : byte
    {
        None = 0,

        [RadioReportId("ang_c_090468", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        Ectasia = 1,

        [RadioReportId("ang_c_090469", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        Aneurysm = 2,
    }
}