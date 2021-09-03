using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum CricothyroidClassificationType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050534", InstanceName = nameof(LarynxFindingType.Trauma))]
        PartialRupture = 1,
        
        [RadioReportId("nec_m_050535", InstanceName = nameof(LarynxFindingType.Trauma))]
        CompleteRupture = 2
    }
}