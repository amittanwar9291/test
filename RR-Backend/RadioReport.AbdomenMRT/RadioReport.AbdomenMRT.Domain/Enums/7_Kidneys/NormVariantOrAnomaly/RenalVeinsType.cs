using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum RenalVeinsType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070415", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        RetroaorticLeftRenal = 1,
        
        [RadioReportId("abd_m_070416", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        MultipleRenal = 2
    }
}
