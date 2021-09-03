using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum AdditionalExtensionType : byte
	{
		None = 0,

		[RadioReportId("spi_m_070530", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070547", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
		Extramedullary = 1,

        [RadioReportId("spi_m_070531", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070548", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
		Epidural = 2,

        [RadioReportId("spi_m_070532", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070549", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
		Extradural = 3
    }
}
