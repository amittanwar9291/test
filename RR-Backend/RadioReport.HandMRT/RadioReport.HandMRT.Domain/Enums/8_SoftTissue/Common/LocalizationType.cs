

using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.SoftTissue
{
    public enum LocalizationType : byte
    {
        None = 0,
        
        [RadioReportId("han_m_080235", InstanceName = nameof(SoftTissueFindingType.Haematoma))]
        [RadioReportId("han_m_080319", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        [RadioReportId("han_m_080231", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        Palmar = 1,
        
        [RadioReportId("han_m_080236", InstanceName = nameof(SoftTissueFindingType.Haematoma))]
        [RadioReportId("han_m_080320", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        [RadioReportId("han_m_080232", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        Dorsal = 2,
        
        [RadioReportId("han_m_080205", InstanceName = nameof(SoftTissueFindingType.Haematoma))]
        [RadioReportId("han_m_080321", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        [RadioReportId("han_m_080233", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        Radial = 3,
        
        [RadioReportId("han_m_080206", InstanceName = nameof(SoftTissueFindingType.Haematoma))]
        [RadioReportId("han_m_080322", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        [RadioReportId("han_m_080234", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        Ulnar = 4,
    }
}