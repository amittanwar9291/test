using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
    public enum PericardiumVesselsDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("car_m_090528")]
        AcutePulmonaryEmbolism = 1,

        [RadioReportId("car_m_090529")]
        ChronicPulmonaryEmbolism = 2,

        [RadioReportId("car_m_090530")]
        PulmonaryHypertension = 3
    }
}
