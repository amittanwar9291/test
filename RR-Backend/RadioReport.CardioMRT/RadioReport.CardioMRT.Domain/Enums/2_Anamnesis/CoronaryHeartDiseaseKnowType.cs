using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Anamnesis
{
    public enum CoronaryHeartDiseaseKnowType : byte
    {
        None = 0,

        [RadioReportId("car_m_020107")]
        Vessel1 = 1,

        [RadioReportId("car_m_020108")]
        Vessel2 = 2,

        [RadioReportId("car_m_020109")]
        Vessel3 = 3
    }
}
