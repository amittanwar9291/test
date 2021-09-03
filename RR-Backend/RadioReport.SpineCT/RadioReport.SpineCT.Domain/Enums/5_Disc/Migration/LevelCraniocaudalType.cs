using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
	public enum LevelCraniocaudalType : byte
	{
		None = 0,

		[RadioReportId("spi_c_050321", InstanceName = nameof(DiscFindingType.Migration))]
        Suprapedicular = 1,

		[RadioReportId("spi_c_050322", InstanceName = nameof(DiscFindingType.Migration))]
        Pedicular = 2,

		[RadioReportId("spi_c_050323", InstanceName = nameof(DiscFindingType.Migration))]
        Infrapedicular = 3,

        [RadioReportId("spi_c_050324", InstanceName = nameof(DiscFindingType.Migration))]
        DiscLevel = 4
    }
}
