using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum TendonTearType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080253", InstanceName = nameof(SoftPartsFindingType.TendonsQuadricepsTendon))]
        CompleteTear = 1,

        [RadioReportId("kne_m_080254", InstanceName = nameof(SoftPartsFindingType.TendonsQuadricepsTendon))]
        PartialTear = 2
    }
}
