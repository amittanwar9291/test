using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum MorphologyType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0504226", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        Extensive = 1,

        [RadioReportId("tho_c_0504227", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        Spotted = 2
    }
}
