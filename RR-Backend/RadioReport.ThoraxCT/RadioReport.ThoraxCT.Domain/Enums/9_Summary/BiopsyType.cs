using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum BiopsyType : byte
    {
        None = 0,

        [RadioReportId("tho_c_090111")]
        CTGuided = 1,

        [RadioReportId("tho_c_090112")]
        Bronchoscopy = 2,

        [RadioReportId("tho_c_090113")]
        Surgical = 3
    }
}
