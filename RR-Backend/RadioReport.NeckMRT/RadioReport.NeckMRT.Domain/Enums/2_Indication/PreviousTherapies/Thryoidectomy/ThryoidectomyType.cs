using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Indication
{
    public enum ThryoidectomyType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_020406", InstanceName = nameof(PreviousTherapyType.Thryoidectomy))]
        CompleteThyroidectomy = 1,
        
        [RadioReportId("nec_m_020407", InstanceName = nameof(PreviousTherapyType.Thryoidectomy))]
        SubtotalThyroidectomy = 2,
        
        [RadioReportId("nec_m_020408", InstanceName = nameof(PreviousTherapyType.Thryoidectomy))]
        Hemithyroidectomy = 3,
        
        [RadioReportId("nec_m_020412", InstanceName = nameof(PreviousTherapyType.Thryoidectomy))]
        RadioiodineTherapy = 4
    }
}