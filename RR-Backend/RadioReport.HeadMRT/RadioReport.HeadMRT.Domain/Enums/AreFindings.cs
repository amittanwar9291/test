using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadMRT.Domain.Constants;

namespace RadioReport.HeadMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("hea_m_040104", InstanceName = InstanceNames.Vessels)]
        False = 1,

        [RadioReportId("hea_m_040105", InstanceName = InstanceNames.Vessels)]
        True = 2
    }
}
