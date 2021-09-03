using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Evaluation
{
    public enum ModalityType : byte
    {
        None = 0,

        [RadioReportId("ang_m_090203")]
        MRAngiography = 1,

        [RadioReportId("ang_m_090204")]
        CTAngiography = 2,

        [RadioReportId("ang_m_090205")]
        UltrasoundOrDuplex = 3
    }
}
