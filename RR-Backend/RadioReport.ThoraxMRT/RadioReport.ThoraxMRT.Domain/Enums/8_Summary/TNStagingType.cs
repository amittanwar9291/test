using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum TNStagingType : byte
    {
        None = 0,

        [RadioReportId("tho_m_080403")]
        BronchialCarcinoma = 1,

        [RadioReportId("tho_m_080404")]
        PleuralMesothelioma = 2
    }
}