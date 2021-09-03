using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
	public enum BulgingDetailsType : byte
	{
		None = 0,

		[RadioReportId("spi_c_0504202", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        Symmetric = 1,

		[RadioReportId("spi_c_0504203", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        Asymmetric = 2
	}
}
