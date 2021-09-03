using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum LungInterstitiumLocalizationCraniocaudalType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603103")]
        Diffuse = 1,

        [RadioReportId("tho_c_0603104")]
        Basal = 2,

        [RadioReportId("tho_c_0603105")]
        Apical = 3,

        [RadioReportId("tho_c_0603106")]
        Focal = 4
    }
}
