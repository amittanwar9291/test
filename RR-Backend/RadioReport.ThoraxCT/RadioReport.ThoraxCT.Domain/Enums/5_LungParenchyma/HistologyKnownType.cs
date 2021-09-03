using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums.RoundStove
{
    public enum HistologyKnownType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0502303", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0502303", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        Benign = 1,

        [RadioReportId("tho_c_0502304", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0502304", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        Malignant = 2
    }
}