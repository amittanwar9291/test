using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums.LungParenchyma
{
    public enum LocalizationAxialType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0503231", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        Peripheral = 1,

        [RadioReportId("tho_c_0503232", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        Central = 2,

        [RadioReportId("tho_c_0503233", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        MiliaryPatternDiffuse = 3
    }
}