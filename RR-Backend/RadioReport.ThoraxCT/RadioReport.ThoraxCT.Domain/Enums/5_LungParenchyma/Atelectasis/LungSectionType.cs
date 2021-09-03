using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum LungSectionType : byte
    {
        None = 0,

        [RadioReportId("tho_c_050274", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        TotalAtelectasis = 1,

        [RadioReportId("tho_c_050277", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        LobeAtelectasis = 2,

        [RadioReportId("tho_c_050279", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        SegmentAtelectasis = 3
    }
}
