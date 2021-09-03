using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum RenalArteryType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070411", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        TwoVesselSupply = 1,
        
        [RadioReportId("abd_m_070412", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        ThreeVesselSupply = 2,
        
        [RadioReportId("abd_m_070413", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        EarlyBifurcationRenalArtery = 3,
        
        [RadioReportId("abd_m_070414", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        PolarArtery = 4
    }
}
