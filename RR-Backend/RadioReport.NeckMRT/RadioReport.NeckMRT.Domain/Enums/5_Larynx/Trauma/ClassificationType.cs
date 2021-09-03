using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum ClassificationType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050243", InstanceName = nameof(LarynxFindingType.Trauma))]
        PartialAvulsion = 1,
        
        [RadioReportId("nec_m_050244", InstanceName = nameof(LarynxFindingType.Trauma))]
        CompleteAvulsion = 2
    }
}