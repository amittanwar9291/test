using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum ExpansionType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050502", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050404", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050502", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050404", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050502", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050502", InstanceName = nameof(DiscFindingType.Sequestration))]
        Slight = 1,

        [RadioReportId("spi_m_050503", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050405", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050503", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050405", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050503", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050503", InstanceName = nameof(DiscFindingType.Sequestration))]
        Moderate = 2,

        [RadioReportId("spi_m_050504", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050406", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050504", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050406", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050504", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050504", InstanceName = nameof(DiscFindingType.Sequestration))]
        Distinct = 3
    }
}
