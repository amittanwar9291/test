using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Indication
{
    public enum GoiterType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_020213", InstanceName = nameof(IndicationType.Goiter))]
        Grade0NoGoiter = 1,
        
        [RadioReportId("nec_m_020214", InstanceName = nameof(IndicationType.Goiter))]
        GradeIA = 2,
        
        [RadioReportId("nec_m_020215", InstanceName = nameof(IndicationType.Goiter))]
        GradeIB = 3,
        
        [RadioReportId("nec_m_020216", InstanceName = nameof(IndicationType.Goiter))]
        GradeII = 4,
        
        [RadioReportId("nec_m_020217", InstanceName = nameof(IndicationType.Goiter))]
        GradeIII = 5
    }
}