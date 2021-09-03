using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.MassInflammation
{
    public enum HistologyProvenType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060210", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Benign = 1,
        
        [RadioReportId("nec_m_060211", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Malignant = 2
    }
}
