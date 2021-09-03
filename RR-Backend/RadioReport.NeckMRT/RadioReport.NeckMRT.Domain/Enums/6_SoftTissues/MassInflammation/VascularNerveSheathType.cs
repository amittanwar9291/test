using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.MassInflammation
{
    public enum VascularNerveSheathType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060426", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Lateral = 1,
        
        [RadioReportId("nec_m_060427", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Medial = 2
    }
}
