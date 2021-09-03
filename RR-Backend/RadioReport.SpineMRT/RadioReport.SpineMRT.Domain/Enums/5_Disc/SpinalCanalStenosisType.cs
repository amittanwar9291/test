using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum SpinalCanalStenosisType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050506", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050408", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050506", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050408", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050506", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050506", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050506", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        [RadioReportId("spi_m_050408", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        Relative = 1,

        [RadioReportId("spi_m_050507", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050409", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050507", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050409", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050507", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050507", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050507", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        [RadioReportId("spi_m_050409", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        Absolute = 2,

        [RadioReportId("spi_m_050508", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050410", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050508", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.Localization))]
        [RadioReportId("spi_m_050410", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(FindingDetailType.BroadBase))]
        [RadioReportId("spi_m_050508", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_m_050508", InstanceName = nameof(DiscFindingType.Sequestration))]
        [RadioReportId("spi_m_050508", InstanceName = nameof(DiscFindingType.FacetJointArthrosis))]
        [RadioReportId("spi_m_050410", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        HighGrade = 3
    }
}
