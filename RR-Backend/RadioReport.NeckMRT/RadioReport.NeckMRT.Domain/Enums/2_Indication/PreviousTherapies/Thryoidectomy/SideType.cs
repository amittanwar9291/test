using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Indication
{
    public enum SideType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_020410", InstanceName = nameof(PreviousTherapyType.Thryoidectomy))]
        Right = 1,

        [RadioReportId("nec_m_020411", InstanceName = nameof(PreviousTherapyType.Thryoidectomy))]
        Left = 2
    }
}