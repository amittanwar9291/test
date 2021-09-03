using RadioReport.Common.Logic.Attributes;
using RadioReport.ElbowMRT.Domain.Constants;

namespace RadioReport.ElbowMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("elb_m_040104", InstanceName = InstanceNames.Bones)]
        [RadioReportId("elb_m_050104", InstanceName = InstanceNames.Cartilage)]
        [RadioReportId("elb_m_060104", InstanceName = InstanceNames.TendonsAndMuscles)]
        [RadioReportId("elb_m_070104", InstanceName = InstanceNames.SoftTissue)]
        False = 1,

        [RadioReportId("elb_m_040105", InstanceName = InstanceNames.Bones)]
        [RadioReportId("elb_m_050105", InstanceName = InstanceNames.Cartilage)]
        [RadioReportId("elb_m_060105", InstanceName = InstanceNames.TendonsAndMuscles)]
        [RadioReportId("elb_m_070105", InstanceName = InstanceNames.SoftTissue)]
        True = 2
    }
}