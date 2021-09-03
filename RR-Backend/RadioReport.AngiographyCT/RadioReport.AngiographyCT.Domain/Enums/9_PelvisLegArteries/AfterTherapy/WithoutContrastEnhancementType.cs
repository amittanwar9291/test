using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries
{
    public enum WithoutContrastEnhancementType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0904122", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Lymphocele = 1,

        [RadioReportId("ang_c_0904123", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Seroma = 2,
    }
}