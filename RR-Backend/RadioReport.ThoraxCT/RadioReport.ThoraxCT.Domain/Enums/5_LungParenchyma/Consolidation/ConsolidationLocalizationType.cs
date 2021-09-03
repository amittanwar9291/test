using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum ConsolidationLocalizationType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0502311", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        Lobar = 1,

        [RadioReportId("tho_c_0502312", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        Segmental = 2,

        [RadioReportId("tho_c_0502403", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        Diffuse = 3
    }
}
