using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum MarginType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070339", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070535", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070452", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070452", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        Sharp = 1,

		[RadioReportId("spi_m_070340", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070536", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070453", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070453", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        Unsharp = 2,

        [RadioReportId("spi_m_070537", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070454", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070454", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        Nodular = 3,

        [RadioReportId("spi_m_070538", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070455", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070455", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        Multinodular = 4
    }
}
