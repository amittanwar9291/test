
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum FindingsDynamicsType : byte
    {
        None = 0,

        [RadioReportId("kne_m_090202")]
        Improvement = 1,

        [RadioReportId("kne_m_090203")]
        NoChange = 2,

        [RadioReportId("kne_m_090204")]
        Deterioration = 3
    }
}
