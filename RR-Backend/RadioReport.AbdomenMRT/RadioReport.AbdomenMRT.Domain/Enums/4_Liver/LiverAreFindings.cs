using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum LiverAreFindings : byte
	{
		None = 0,
		
        [RadioReportId("abd_m_040104")]
        NormalImagingOfTheLiverGallbladderAndBileDucts = 1,
		
        [RadioReportId("abd_m_040115")]
        NoDetails = 2,
		
        [RadioReportId("abd_m_040105")]
        Finding = 3
	}
}