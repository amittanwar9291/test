using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum ModalityType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_0702108", InstanceName = nameof(KidneysFinding.DD1ModalityType))]
        [RadioReportId("abd_m_0703107", InstanceName = nameof(KidneysFinding.DD2ModalityType))]
        [RadioReportId("abd_m_0704120", InstanceName = nameof(KidneysFinding.DD3ModalityType))]
        Sonography = 1,
        
        [RadioReportId("abd_m_0702109", InstanceName = nameof(KidneysFinding.DD1ModalityType))]
        [RadioReportId("abd_m_0703108", InstanceName = nameof(KidneysFinding.DD2ModalityType))]
        [RadioReportId("abd_m_0704121", InstanceName = nameof(KidneysFinding.DD3ModalityType))]
        CMCT = 2,
        
        [RadioReportId("abd_m_0702110", InstanceName = nameof(KidneysFinding.DD1ModalityType))]
        [RadioReportId("abd_m_0703109", InstanceName = nameof(KidneysFinding.DD2ModalityType))]
        [RadioReportId("abd_m_0704122", InstanceName = nameof(KidneysFinding.DD3ModalityType))]
        CMMRI = 3
    }
}
