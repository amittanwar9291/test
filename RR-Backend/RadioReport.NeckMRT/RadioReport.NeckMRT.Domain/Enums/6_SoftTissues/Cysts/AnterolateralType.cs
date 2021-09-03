using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.Cysts
{
    public enum AnterolateralType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060310", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        SupratonsillarFossa = 1,
        
        [RadioReportId("nec_m_060311", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        PiriformSinus = 2
    }
}
