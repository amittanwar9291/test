using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum TendonLocalizationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080261", InstanceName = nameof(SoftPartsFindingType.TendonsQuadricepsTendon))]
        [RadioReportId("kne_m_080267", InstanceName = nameof(SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        [RadioReportId("kne_m_080282", InstanceName = nameof(SoftPartsFindingType.TendonsPopliteusTendon))]
        [RadioReportId("kne_m_080292", InstanceName = nameof(SoftPartsFindingType.TendonsTractusIliotibialis))]
        [RadioReportId("kne_m_080292", InstanceName = nameof(SoftPartsFindingType.TendonsPesAnserinus))]
        Intramuscular = 1,

        [RadioReportId("kne_m_080262", InstanceName = nameof(SoftPartsFindingType.TendonsQuadricepsTendon))]
        [RadioReportId("kne_m_080268", InstanceName = nameof(SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        [RadioReportId("kne_m_080283", InstanceName = nameof(SoftPartsFindingType.TendonsPopliteusTendon))]
        [RadioReportId("kne_m_080293", InstanceName = nameof(SoftPartsFindingType.TendonsTractusIliotibialis))]
        [RadioReportId("kne_m_080293", InstanceName = nameof(SoftPartsFindingType.TendonsPesAnserinus))]
        Intratendinous = 2,

        [RadioReportId("kne_m_080263", InstanceName = nameof(SoftPartsFindingType.TendonsQuadricepsTendon))]
        [RadioReportId("kne_m_080269", InstanceName = nameof(SoftPartsFindingType.TendonsBicepsFemorisTendon))]
        [RadioReportId("kne_m_080284", InstanceName = nameof(SoftPartsFindingType.TendonsPopliteusTendon))]
        [RadioReportId("kne_m_080294", InstanceName = nameof(SoftPartsFindingType.TendonsTractusIliotibialis))]
        [RadioReportId("kne_m_080294", InstanceName = nameof(SoftPartsFindingType.TendonsPesAnserinus))]
        Insertion = 3
    }
}
