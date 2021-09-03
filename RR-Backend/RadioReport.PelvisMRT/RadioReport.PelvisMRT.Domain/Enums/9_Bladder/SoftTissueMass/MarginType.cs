using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum MarginType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0903112", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        Circumscribed = 1,

        [RadioReportId("pel_m_0903113", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        NonCircumscribed = 2
    }
}
