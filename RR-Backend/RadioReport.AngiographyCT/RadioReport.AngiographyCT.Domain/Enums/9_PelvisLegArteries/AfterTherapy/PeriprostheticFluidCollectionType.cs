using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum PeriprostheticFluidCollectionType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0904119", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        WithContrastEnhancement = 1,

        [RadioReportId("ang_c_0904121", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        WithoutContrastEnhancement = 2,
    }
}