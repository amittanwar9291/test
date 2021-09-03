using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum  AbdomenLocalizationType : byte
	{
		None = 0,

		[RadioReportId("tho_c_0702105", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
		[RadioReportId("tho_c_0702165", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
        Right = 1,

		[RadioReportId("tho_c_0702106", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
        [RadioReportId("tho_c_0702166", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
        Left = 2,

		[RadioReportId("tho_c_0702183", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenPancreas))]
        Head = 3,

		[RadioReportId("tho_c_0702184", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenPancreas))]
        Body = 4,

		[RadioReportId("tho_c_0702185", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenPancreas))]
        Tail = 5,

		[RadioReportId("tho_c_0702186", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenPancreas))]
        UncinateProcess = 6
	}
}
