using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.LeftVentricle
{
	public enum MeasureType
	{
		None = 0,

        [RadioReportId("car_m_060125", InstanceName = nameof(LeftVentriclePage.T1Localizer))]
        [RadioReportId("car_m_060225", InstanceName = nameof(LeftVentriclePage.T2Localizer))]
        [RadioReportId("car_m_060311", InstanceName = nameof(LeftVentriclePage.T1GdLocalizer))]
        Qualitative = 1,

        [RadioReportId("car_m_060126", InstanceName = nameof(LeftVentriclePage.T1Localizer))]
        [RadioReportId("car_m_060226", InstanceName = nameof(LeftVentriclePage.T2Localizer))]
        [RadioReportId("car_m_060436", InstanceName = nameof(LeftVentriclePage.T1GdLocalizer))]
        Quantitative = 2
	}
}
