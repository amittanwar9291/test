using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum LungParenchymaFormType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0504222", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        Plateatelectasis = 1,

        [RadioReportId("tho_c_0504223", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        RoundAtelectasis = 2,

        [RadioReportId("tho_c_0504224", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        Dystelectasis = 3
    }
}
