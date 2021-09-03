using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum ChronicThromboembolicType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040435", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		Type1Central = 1,

		[RadioReportId("tho_c_040436", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		Type2ProximalOfTheSegmentArteries = 2,

		[RadioReportId("tho_c_040437", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		Type3DistalSegmentalSubsegmental = 3
    }
}
