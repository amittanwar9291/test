using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum DynamicFindingsType : byte
    {
        None = 0,

        [RadioReportId("tho_c_090303")]
        Progression = 1,

        [RadioReportId("tho_c_090304")]
        StableDiseaseOrNoChange = 2,

        [RadioReportId("tho_c_090305")]
        Improvement = 3
    }
}
