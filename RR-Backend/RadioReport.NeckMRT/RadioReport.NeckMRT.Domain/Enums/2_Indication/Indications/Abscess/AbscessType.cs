using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Indication
{
    public enum AbscessType: byte
    {
        None = 0,
		
        [RadioReportId("nec_m_020241", InstanceName = nameof(IndicationType.Abscess))]
        Suspected = 1,
		
        [RadioReportId("nec_m_020242", InstanceName = nameof(IndicationType.Abscess))]
        FollowUpExamination = 2
    }
}