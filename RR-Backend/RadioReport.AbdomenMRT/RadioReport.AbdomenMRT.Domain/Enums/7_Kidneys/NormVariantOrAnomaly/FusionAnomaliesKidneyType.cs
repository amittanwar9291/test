using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum FusionAnomaliesKidneyType : byte
    {
        None = 0,

        [RadioReportId("abd_m_070504", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        Horseshoe = 1,
        
        [RadioReportId("abd_m_070505", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        Pancake = 2,
        
        [RadioReportId("abd_m_070506", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        CrossedEctopic = 3
    }
}
