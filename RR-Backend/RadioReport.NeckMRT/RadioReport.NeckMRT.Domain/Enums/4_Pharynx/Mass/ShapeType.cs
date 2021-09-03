using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Pharynx
{
    public enum ShapeType : byte
    {
        None = 0,

        [RadioReportId("nec_m_040514", InstanceName = nameof(PharynxFindingType.Mass))]
        Round = 1,
        
        [RadioReportId("nec_m_040515", InstanceName = nameof(PharynxFindingType.Mass))]
        Lobulated = 2,
        
        [RadioReportId("nec_m_040516", InstanceName = nameof(PharynxFindingType.Mass))]
        BroadBased = 3,
        
        [RadioReportId("nec_m_040517", InstanceName = nameof(PharynxFindingType.Mass))]
        Pedunculated = 4,
    }
}
