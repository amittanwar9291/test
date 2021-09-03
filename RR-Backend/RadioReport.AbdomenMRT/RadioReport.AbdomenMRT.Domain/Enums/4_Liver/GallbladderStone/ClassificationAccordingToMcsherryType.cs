using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum ClassificationAccordingToMcsherryType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040351", InstanceName = nameof(LiverFindingType.GallbladderStone))]
		TypeIConcrementInCysticDuctGallbladder = 1,

		[RadioReportId("abd_m_040352", InstanceName = nameof(LiverFindingType.GallbladderStone))]
		TypeIiCholecystobiliaryFistulaFormation = 2
	}
}