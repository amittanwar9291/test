using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum FindingsDynamicsType : byte
    {
        None = 0,

        [RadioReportId("hip_m_090104")]
        Improvement = 1,

        [RadioReportId("hip_m_090105")]
        NoChange = 2,

        [RadioReportId("hip_m_090106")]
        Deterioration = 3
    }
}
