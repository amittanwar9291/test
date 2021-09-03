using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("spi_m_070427", InstanceName = nameof(SpinalCanalFinding.HomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070218", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070540", InstanceName = nameof(SpinalCanalFinding.HomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070445", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070457", InstanceName = nameof(SpinalCanalFinding.HomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070445", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070457", InstanceName = nameof(SpinalCanalFinding.HomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        [RadioReportId("spi_m_070445", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        [RadioReportId("spi_m_070463", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalFindingType.NoMassEffect))]
        Homogeneous = 1,

        [RadioReportId("spi_m_070428", InstanceName = nameof(SpinalCanalFinding.HomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070219", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070541", InstanceName = nameof(SpinalCanalFinding.HomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070446", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070458", InstanceName = nameof(SpinalCanalFinding.HomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070446", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070458", InstanceName = nameof(SpinalCanalFinding.HomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        [RadioReportId("spi_m_070446", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        [RadioReportId("spi_m_070464", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalFindingType.NoMassEffect))]
        Heterogeneous = 2,

        [RadioReportId("spi_m_070220", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070447", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070447", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070447", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        RimEnhancement = 3,

        [RadioReportId("spi_m_0704201", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        Epidural = 4,

        [RadioReportId("spi_m_0704202", InstanceName = nameof(SpinalCanalFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        TailSign = 5
    }
}