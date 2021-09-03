using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum PeculiaritySegmentatelectasisType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0504219", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        Segmental = 1,

        [RadioReportId("tho_c_0504220", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        Subsegmenta = 2
    }
}
