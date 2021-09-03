using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum MarginType : byte
    {
        None = 0,

        [RadioReportId("hip_m_080516", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Sharp = 1,
        
        [RadioReportId("hip_m_080517", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        IllDefined = 2
    }
}