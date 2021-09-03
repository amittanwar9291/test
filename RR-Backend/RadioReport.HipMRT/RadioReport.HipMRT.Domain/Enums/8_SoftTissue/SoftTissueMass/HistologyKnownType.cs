using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum HistologyKnownType : byte
    {
        None = 0,

        [RadioReportId("hip_m_080217", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Benign = 1,
        
        [RadioReportId("hip_m_080218", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Malignant = 2
    }
}