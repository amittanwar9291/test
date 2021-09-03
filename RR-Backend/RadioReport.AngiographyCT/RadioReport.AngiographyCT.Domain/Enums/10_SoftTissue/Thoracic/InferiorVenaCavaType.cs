using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SoftTissue
{
    public enum InferiorVenaCavaType : byte
    {
        None = 0,

        [RadioReportId("ang_c_100516", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        LeftVCI = 1,

        [RadioReportId("ang_c_100517", InstanceName = nameof(SoftTissueFindingType.Thoracic))]
        DuplicationOfTheInferiorVenaCava = 2,
    }
}