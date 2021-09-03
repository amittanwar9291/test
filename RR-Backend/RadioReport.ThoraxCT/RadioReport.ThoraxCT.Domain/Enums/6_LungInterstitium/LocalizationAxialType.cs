using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum LocalizationAxialType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0604102")]
        Subpleural = 1,

        [RadioReportId("tho_c_0604103")]
        Bronchocentric = 2,

        [RadioReportId("tho_c_0604104")]
        Diffuse = 3,

        [RadioReportId("tho_c_0604105")]
        SubstantialExclusionOfExtrapleuralSpace = 4
    }
}
