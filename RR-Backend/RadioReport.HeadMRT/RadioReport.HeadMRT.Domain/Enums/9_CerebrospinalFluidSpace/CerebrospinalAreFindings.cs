using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace
{
    public enum CerebrospinalAreFindings : byte
    {
        None = 0,

        [RadioReportId("hea_m_090104")]
        MediumInterhemisphericSlit = 1,

        [RadioReportId("hea_m_090113")]
        NoDetails = 2,

        [RadioReportId("hea_m_090105")]
        True = 3
    }
}
