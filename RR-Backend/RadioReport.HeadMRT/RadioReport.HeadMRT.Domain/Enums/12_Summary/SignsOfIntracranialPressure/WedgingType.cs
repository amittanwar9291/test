using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum WedgingType : byte
    {
        None = 0,
        
        [RadioReportId("hea_m_120509", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        Starting = 1,

        [RadioReportId("hea_m_120510", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        Manifest = 2 
    }
}