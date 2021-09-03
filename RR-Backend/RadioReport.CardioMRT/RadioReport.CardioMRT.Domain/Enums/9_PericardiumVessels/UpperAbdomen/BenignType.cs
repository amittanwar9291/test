
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
    public enum BenignType : byte
    {
        None = 0,

        [RadioReportId("car_m_0902190")]
        Cyst = 1,

        [RadioReportId("car_m_0902191")]
        Hemangioma = 2
    }
}
