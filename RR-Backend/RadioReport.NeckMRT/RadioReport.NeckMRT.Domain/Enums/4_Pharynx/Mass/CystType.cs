using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Pharynx
{
    public enum CystType : byte
    {
        None = 0,

        [RadioReportId("nec_m_040349", InstanceName = nameof(PharynxFindingType.Mass))]
        Simple = 1,
        
        [RadioReportId("nec_m_040369", InstanceName = nameof(PharynxFindingType.Mass))]
        Complex = 2
    }
}
