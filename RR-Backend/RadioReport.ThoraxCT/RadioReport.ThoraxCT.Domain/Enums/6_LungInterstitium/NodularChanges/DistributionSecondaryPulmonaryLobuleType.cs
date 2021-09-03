using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum DistributionSecondaryPulmonaryLobuleType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603109", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        Centrilobular = 1,

        [RadioReportId("tho_c_0603110", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        Perilymphatic = 2,

        [RadioReportId("tho_c_0603111", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        RandomDistribution = 3
    }
}
