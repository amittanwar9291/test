using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Pharynx
{
    public enum MarginType : byte
    {
        None = 0,

        [RadioReportId("nec_m_040508", InstanceName = nameof(PharynxFindingType.Mass))]
        Circumscribed = 1,
        
        [RadioReportId("nec_m_040509", InstanceName = nameof(PharynxFindingType.Mass))]
        NonCircumscribed = 2,
    }
}
