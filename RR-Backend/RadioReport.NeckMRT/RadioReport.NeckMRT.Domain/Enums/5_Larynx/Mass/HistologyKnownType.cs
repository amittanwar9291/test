using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum HistologyKnownType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050206", InstanceName = nameof(LarynxFindingType.Mass))]
        Benign = 1,
        
        [RadioReportId("nec_m_050207", InstanceName = nameof(LarynxFindingType.Mass))]
        Malignant = 2
    }
}