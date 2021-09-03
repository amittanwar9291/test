using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums
{
	public enum IntracranialHypotensionSyndromeType : byte
	{
		None = 0,

		[RadioReportId("spi_c_020229", InstanceName = nameof(AnamnesisIndicationType.IntracranialHypotensionSyndrome))]
        SuspicionOf = 1,

		[RadioReportId("spi_c_020230", InstanceName = nameof(AnamnesisIndicationType.IntracranialHypotensionSyndrome))]
        ExclusionOf = 2
	}
}
