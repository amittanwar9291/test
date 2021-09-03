using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
	public enum ContrastEnhancementType : byte
	{
		None = 0,

        [RadioReportId("spi_m_070215", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070442", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070460", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        Strong = 1,

        [RadioReportId("spi_m_070216", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070443", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070461", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        Weak = 2,

        [RadioReportId("spi_m_070217", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070444", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070462", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        No = 3
    }
}