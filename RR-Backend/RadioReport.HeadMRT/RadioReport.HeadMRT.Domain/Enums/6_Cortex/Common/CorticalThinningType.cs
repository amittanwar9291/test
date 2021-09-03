using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Cortex
{
    public enum CorticalThinningType : byte
    {
        None = 0,

        [RadioReportId("hea_m_060428", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060366", InstanceName = nameof(CortexFindingType.Diffuse))]
        Generalized = 1,

        [RadioReportId("hea_m_060429", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060367", InstanceName = nameof(CortexFindingType.Diffuse))]
        Regional = 2
    }
}
