using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum AreFindings : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070104", InstanceName = nameof(InstanceNames.Kidneys))]
        KidneysAndIncludedUreters = 1,

        [RadioReportId("abd_m_070105", InstanceName = nameof(InstanceNames.Kidneys))]
        True = 2,
                        
        [RadioReportId("abd_m_070113", InstanceName = nameof(InstanceNames.Kidneys))]
        NoDetails = 3
    }
}
