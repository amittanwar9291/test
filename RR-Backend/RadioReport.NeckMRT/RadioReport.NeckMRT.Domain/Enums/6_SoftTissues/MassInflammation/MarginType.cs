using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.MassInflammation
{
    public enum MarginType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060439", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Circumscribed = 1,
        
        [RadioReportId("nec_m_060440", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        NonCircumscribed = 2
    }
}
