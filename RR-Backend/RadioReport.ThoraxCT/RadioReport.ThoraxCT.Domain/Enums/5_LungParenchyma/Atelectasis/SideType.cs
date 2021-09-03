using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0502305", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        Right = 1,

        [RadioReportId("tho_c_0502306", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        Left = 2
    }
}
