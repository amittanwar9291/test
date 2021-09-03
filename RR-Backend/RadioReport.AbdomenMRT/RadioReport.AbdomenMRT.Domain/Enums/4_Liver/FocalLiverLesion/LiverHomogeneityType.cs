using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
    public enum LiverHomogeneityType : byte
    {
        None = 0,

        [RadioReportId("abd_m_040506", InstanceName = nameof(LiverFinding.HomogeneityType))]
        [RadioReportId("abd_m_040516", InstanceName = nameof(LiverFinding.QualityOfEnhancement))]
        Homogeneous = 1,

        [RadioReportId("abd_m_040507", InstanceName = nameof(LiverFinding.HomogeneityType))]
        [RadioReportId("abd_m_040517", InstanceName = nameof(LiverFinding.QualityOfEnhancement))]
        Heterogeneous = 2
    }
}