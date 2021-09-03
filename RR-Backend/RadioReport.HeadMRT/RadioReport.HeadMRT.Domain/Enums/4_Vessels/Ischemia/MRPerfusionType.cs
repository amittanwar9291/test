using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum MRPerfusionType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040503", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Normal = 1,

        [RadioReportId("hea_m_040504", InstanceName = nameof(VesselsFindingType.Ischemia))]
        PathologicalFindings = 2,

        [RadioReportId("hea_m_040505", InstanceName = nameof(VesselsFindingType.Ischemia))]
        NotEvaluable = 3
    }
}
