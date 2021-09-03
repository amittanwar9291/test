using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum COVID19CTGroupsType : byte
    {
        None = 0,

        [RadioReportId("tho_c_090503")]
        SuggestiveForACOVID19Pneumonia = 1,

        [RadioReportId("tho_c_090504")]
        ImagingFeaturesAreIndeterminate = 2,

        [RadioReportId("tho_c_090505")]
        SuggestivForAlternativDiagnosis = 3,

        [RadioReportId("tho_c_090506")]
        CTNegativeForPneumonicOpacities = 4
    }
}
