using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
	public enum PathriaClassificationType : byte
	{
		None = 0,

		[RadioReportId("spi_c_0503208", InstanceName = nameof(DiscFindingType.FacetJoints))]
        Grade1 = 1,

		[RadioReportId("spi_c_0503209", InstanceName = nameof(DiscFindingType.FacetJoints))]
        Grade2 = 2,

        [RadioReportId("spi_c_0503210", InstanceName = nameof(DiscFindingType.FacetJoints))]
        Grade3 = 3
    }
}
