using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Pharynx
{
    public enum AsymmetryType : byte
    {
        None = 0,

        [RadioReportId("nec_m_040430", InstanceName = nameof(PharynxFindingType.Mass))]
        ToTheRight = 1,
        
        [RadioReportId("nec_m_040431", InstanceName = nameof(PharynxFindingType.Mass))]
        ToTheLeft = 2,
    }
}
