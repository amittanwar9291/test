using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Anamnesis
{
    public enum CoronaryHeartDiseaseType: byte
    {
        None = 0,

        [RadioReportId("car_m_020106")]
        Know = 1,

        [RadioReportId("car_m_020110")]
        SuspicionOf = 2
    }
}
