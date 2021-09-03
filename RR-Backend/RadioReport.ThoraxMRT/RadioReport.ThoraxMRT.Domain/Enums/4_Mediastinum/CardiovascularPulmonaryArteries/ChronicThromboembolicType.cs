using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum ChronicThromboembolicType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040520", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		Type1Central = 1,

		[RadioReportId("tho_m_040521", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		Type2ProximalOfTheSegmentArteries = 2,

		[RadioReportId("tho_m_040522", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		Type3DistalSegmentalSubsegmental = 3
    }
}
