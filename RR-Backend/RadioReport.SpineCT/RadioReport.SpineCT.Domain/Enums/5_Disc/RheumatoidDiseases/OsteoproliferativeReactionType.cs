using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
	public enum OsteoproliferativeReactionType : byte
	{
		None = 0,

		[RadioReportId("spi_c_0503238", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        Bridging = 1,

		[RadioReportId("spi_c_0503239", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        MultisegmentalAnkylosing = 2
	}
}
