using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum GallbladderNormVariantPostoperativeType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040254", InstanceName = nameof(LiverFindingType.GallbladderNormVariantPostoperative))]
		StatusPostCholecystectomy = 1,

		[RadioReportId("abd_m_040255", InstanceName = nameof(LiverFindingType.GallbladderNormVariantPostoperative))]
		DuplicatedCysticDuct = 2,

		[RadioReportId("abd_m_040256", InstanceName = nameof(LiverFindingType.GallbladderNormVariantPostoperative))]
		DuplicatedGallBladder = 3
	}
}