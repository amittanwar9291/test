using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity
{
    public enum AreFindings : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_100104", InstanceName = nameof(InstanceNames.PeritonealCavity))]
        False = 1,

        [RadioReportId("abd_m_100105", InstanceName = nameof(InstanceNames.PeritonealCavity))]
        True = 2,
                        
        [RadioReportId("abd_m_100109", InstanceName = nameof(InstanceNames.PeritonealCavity))]
        NoDetails = 3
    }
}
