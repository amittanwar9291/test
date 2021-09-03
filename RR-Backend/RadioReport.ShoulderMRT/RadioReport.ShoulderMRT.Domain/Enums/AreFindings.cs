using RadioReport.Common.Logic.Attributes;
using RadioReport.ShoulderMRT.Domain.Constants;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("sho_m_040104", InstanceName = InstanceNames.Bones)]
        [RadioReportId("sho_m_050108", InstanceName = InstanceNames.Rotator)]
        [RadioReportId("sho_m_060104", InstanceName = InstanceNames.LabrumAndRibbons)]
        [RadioReportId("sho_m_070104", InstanceName = InstanceNames.JointAndBursae)]
        [RadioReportId("sho_m_080104", InstanceName = InstanceNames.SoftParts)]
        False = 1,

        [RadioReportId("sho_m_040105", InstanceName = InstanceNames.Bones)]
        [RadioReportId("sho_m_050109", InstanceName = InstanceNames.Rotator)]
        [RadioReportId("sho_m_060105", InstanceName = InstanceNames.LabrumAndRibbons)]
        [RadioReportId("sho_m_070105", InstanceName = InstanceNames.JointAndBursae)]
        [RadioReportId("sho_m_080105", InstanceName = InstanceNames.SoftParts)]
        True = 2
    }
}