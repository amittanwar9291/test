using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum DiffuseLesionType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070392", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
		SteatosisHepatis = 1,

		[RadioReportId("tho_c_070393", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
        CirrhosisOfTheLiver = 2,

		[RadioReportId("tho_c_070395", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
        Hemosiderosis = 3
	}
}
