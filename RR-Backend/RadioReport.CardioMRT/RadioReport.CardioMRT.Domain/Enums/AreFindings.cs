using RadioReport.CardioMRT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("car_m_040104", InstanceName = InstanceNames.Flaps)]
        [RadioReportId("car_m_080104", InstanceName = InstanceNames.SpatialRequirement)]
        [RadioReportId("car_m_090105", InstanceName = InstanceNames.PericardiumVessels)]
        False = 1,

        [RadioReportId("car_m_040105", InstanceName = InstanceNames.Flaps)]
        [RadioReportId("car_m_080105", InstanceName = InstanceNames.SpatialRequirement)]
        [RadioReportId("car_m_090106", InstanceName = InstanceNames.PericardiumVessels)]
        True = 2,

        [RadioReportId("car_m_090104", InstanceName = InstanceNames.PericardiumVessels)]
        NormalAppearance = 3
    }
}