using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.LeftVentricle
{
    public enum RelaxationTimeType : byte
    {
		None = 0,

        [RadioReportId("car_m_060130", InstanceName = nameof(LeftVentriclePage.T1Localizer))]
        [RadioReportId("car_m_060230", InstanceName = nameof(LeftVentriclePage.T2Localizer))]
        [RadioReportId("car_m_060313", InstanceName = nameof(LeftVentriclePage.T1GdLocalizer))]
        Diffuse = 1,

        [RadioReportId("car_m_060127", InstanceName = nameof(LeftVentriclePage.T1Localizer))]
        [RadioReportId("car_m_060227", InstanceName = nameof(LeftVentriclePage.T2Localizer))]
        [RadioReportId("car_m_060312", InstanceName = nameof(LeftVentriclePage.T1GdLocalizer))]
        Focal = 2
	}
}
