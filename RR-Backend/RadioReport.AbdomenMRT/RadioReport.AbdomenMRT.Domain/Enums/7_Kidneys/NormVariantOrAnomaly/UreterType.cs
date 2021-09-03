using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum UreterType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070417", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        UreterFissus = 1,
        
        [RadioReportId("abd_m_070418", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        UreterDuplex = 2
    }
}
