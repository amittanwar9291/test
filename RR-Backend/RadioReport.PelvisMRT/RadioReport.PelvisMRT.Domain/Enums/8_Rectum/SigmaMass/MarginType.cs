using RadioReport.Common.Logic.Attributes;


namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum MarginType : byte
    {
        None = 0,

        [RadioReportId("pel_m_080347", InstanceName = nameof(RectumFindingType.SigmaMass))]
        Circumscribed = 1,

        [RadioReportId("pel_m_080348", InstanceName = nameof(RectumFindingType.SigmaMass))]
        NonCircumscribed = 2
    }
}
