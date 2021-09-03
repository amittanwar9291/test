using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum ContrastEnhancementQuantitativeType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0503202", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0704101", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_070510", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
        [RadioReportId("tho_c_070365", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_070559", InstanceName = nameof(SoftPartsFindingType.Mamma))]
        No = 1,

        [RadioReportId("tho_c_0503203", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0704102", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_070509", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
        [RadioReportId("tho_c_070363", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_070558", InstanceName = nameof(SoftPartsFindingType.Mamma))]
        Minimal = 2,

        [RadioReportId("tho_c_0503204", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0704103", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_070518", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
        [RadioReportId("tho_c_070364", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_070557", InstanceName = nameof(SoftPartsFindingType.Mamma))]
        Marked = 3
    }
}