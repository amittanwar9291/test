using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Pharynx
{
    public enum ProvenHistologyType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_040211", InstanceName = nameof(PharynxFindingType.Mass))]
        Benign = 1,
        
        [RadioReportId("nec_m_040212", InstanceName = nameof(PharynxFindingType.Mass))]
        Malignant = 2
    }
}
