using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums.Lymphs
{
    public enum LungDiseaseType : byte
    {
        None = 0,

        [RadioReportId("mam_m_070402")]
        PulmonaryNodule = 1,

        [RadioReportId("mam_m_070403")]
        Mass = 2,

        [RadioReportId("mam_m_070404")]
        PleuralEffusion = 3
    }
}
