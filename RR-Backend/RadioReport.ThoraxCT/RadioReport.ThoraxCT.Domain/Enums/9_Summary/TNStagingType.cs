using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum TNStagingType : byte
    {
        None = 0,

        [RadioReportId("tho_c_090308")]
        BronchialCarcinoma = 1,

        [RadioReportId("tho_c_090309")]
        PleuralMesothelioma = 2
    }
}