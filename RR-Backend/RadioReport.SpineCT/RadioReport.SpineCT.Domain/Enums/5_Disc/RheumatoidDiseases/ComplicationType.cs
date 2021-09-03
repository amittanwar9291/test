using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
	public enum ComplicationType : byte
	{
		None = 0,

		[RadioReportId("spi_c_0504244", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        FractureTransvertebral = 1,

		[RadioReportId("spi_c_0504245", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        FractureTransdiscal = 2
	}
}
