using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.SoftTissue
{
    public enum HistologyKnownType : byte
    {
        None = 0,
        
        [RadioReportId("han_m_080211", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Benign = 1,
        
        [RadioReportId("han_m_080212", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Malignant = 2
    }
}