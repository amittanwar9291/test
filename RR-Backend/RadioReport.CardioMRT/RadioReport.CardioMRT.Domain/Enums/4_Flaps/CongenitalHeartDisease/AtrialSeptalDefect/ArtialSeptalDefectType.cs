using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Flaps
{
    public enum ArtialSeptalDefectType : byte
    {
		None = 0,

        [RadioReportId("car_m_040338", InstanceName = nameof(CongenitalHeartDiseaseFindingType.AtrialSeptalDefect))]
        OstiumPrimum = 1,

        [RadioReportId("car_m_040339", InstanceName = nameof(CongenitalHeartDiseaseFindingType.AtrialSeptalDefect))]
        OstiumSecundum = 2,

        [RadioReportId("car_m_040340", InstanceName = nameof(CongenitalHeartDiseaseFindingType.AtrialSeptalDefect))]
        SinusVenosusType = 3,

        [RadioReportId("car_m_040343", InstanceName = nameof(CongenitalHeartDiseaseFindingType.AtrialSeptalDefect))]
        SinusCoronariusType = 4
	}
}