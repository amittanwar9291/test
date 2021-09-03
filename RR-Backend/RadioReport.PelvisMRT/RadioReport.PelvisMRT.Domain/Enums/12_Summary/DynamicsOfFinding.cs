using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum DynamicsOfFinding : byte
    {
        None = 0,

        [RadioReportId("pel_m_120202")]
        Deterioration = 1,
        
        [RadioReportId("pel_m_120203")]
        NoChange = 2,
        
        [RadioReportId("pel_m_120204")]
        Improvement = 3,
        
        [RadioReportId("pel_m_120205")]
        DetailedAfterChemotherapy = 4
    }
}
