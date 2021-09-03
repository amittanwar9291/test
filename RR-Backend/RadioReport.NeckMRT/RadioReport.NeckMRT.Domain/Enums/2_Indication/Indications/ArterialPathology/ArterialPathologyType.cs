using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Indication
{
    public enum ArterialPathologyType: byte
    {
        None = 0,
		
        [RadioReportId("nec_m_020244", InstanceName = nameof(IndicationType.ArterialPathology))]
        Stenosis = 1,
		
        [RadioReportId("nec_m_020245", InstanceName = nameof(IndicationType.ArterialPathology))]
        Occlusion = 2,
		
        [RadioReportId("nec_m_020246", InstanceName = nameof(IndicationType.ArterialPathology))]
        Aneurysm = 3,
		
        [RadioReportId("nec_m_020247", InstanceName = nameof(IndicationType.ArterialPathology))]
        Dissection = 4
    }
}