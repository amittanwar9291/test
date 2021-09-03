using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum PossibleEpileptogenicFindingsType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120228", InstanceName = nameof(SummaryFindingType.Seizure))]
        TemporomesialSclerosis = 1,

        [RadioReportId("hea_m_120229", InstanceName = nameof(SummaryFindingType.Seizure))]
        FocalCorticalDysplasia = 2,

        [RadioReportId("hea_m_120230", InstanceName = nameof(SummaryFindingType.Seizure))]
        Heterotopia = 3,

        [RadioReportId("hea_m_120231", InstanceName = nameof(SummaryFindingType.Seizure))]
        Polymicrogyria = 4,

        [RadioReportId("hea_m_120232", InstanceName = nameof(SummaryFindingType.Seizure))]
        Hemimegalencephaly = 5,

        [RadioReportId("hea_m_120233", InstanceName = nameof(SummaryFindingType.Seizure))]
        Schizencephaly = 6,

        [RadioReportId("hea_m_120234", InstanceName = nameof(SummaryFindingType.Seizure))]
        EpileptogenicMass = 7,

        [RadioReportId("hea_m_120235", InstanceName = nameof(SummaryFindingType.Seizure))]
        Gliosis = 8,

        [RadioReportId("hea_m_120236", InstanceName = nameof(SummaryFindingType.Seizure))]
        Scars = 9,

        [RadioReportId("hea_m_120237", InstanceName = nameof(SummaryFindingType.Seizure))]
        Cavernoma = 10,

        [RadioReportId("hea_m_120238", InstanceName = nameof(SummaryFindingType.Seizure))]
        Encephalomalacia = 11,

        [RadioReportId("hea_m_120239", InstanceName = nameof(SummaryFindingType.Seizure))]
        CavernousHemangioma = 12,

        [RadioReportId("hea_m_120240", InstanceName = nameof(SummaryFindingType.Seizure))]
        SturgeWeberSSyndrome = 13,

        [RadioReportId("hea_m_120241", InstanceName = nameof(SummaryFindingType.Seizure))]
        TuberousSclerosis = 14
    }
}
