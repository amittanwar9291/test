using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum ThoracicType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100206", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        PericardialEffusion = 1,

        [RadioReportId("ang_c_100207", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        PericardialCalcifications = 2,

        [RadioReportId("ang_c_100208", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        PleuralEffusion = 3,

        [RadioReportId("ang_c_100209", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        PulmonaryArteryEmbolism = 4,

        [RadioReportId("ang_c_100210", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        NormVariantVessels = 5,

        [RadioReportId("ang_c_100211", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        Pneumothorax = 6,

        [RadioReportId("ang_c_100212", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        Atelectasis = 7,

        [RadioReportId("ang_c_100213", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        PneumonicConsolidation = 8,

        [RadioReportId("ang_c_100214", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        Mass = 9,

        [RadioReportId("ang_c_100215", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        Fracture = 10,
    }
}