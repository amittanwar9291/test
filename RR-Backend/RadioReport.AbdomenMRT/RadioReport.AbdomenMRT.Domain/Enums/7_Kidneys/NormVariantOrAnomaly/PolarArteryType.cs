using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum PolarArteryType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070487", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        Cranial = 1,
        
        [RadioReportId("abd_m_070488", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        Caudal = 2
    }
}
