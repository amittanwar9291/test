using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.MassInflammation
{
    public enum ShapeType : byte
    {
        None = 0,

        [RadioReportId("nec_m_040514", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Round = 1,
        
        [RadioReportId("nec_m_040515", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Lobulated = 2,
        
        [RadioReportId("nec_m_040516", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        BroadBased = 3,
        
        [RadioReportId("nec_m_040517", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Pedunculated = 4,
    }
}
