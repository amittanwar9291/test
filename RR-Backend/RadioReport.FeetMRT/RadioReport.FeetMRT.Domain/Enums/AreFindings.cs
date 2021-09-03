using RadioReport.Common.Logic.Attributes;
using RadioReport.FeetMRT.Domain.Constants;

namespace RadioReport.FeetMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("anc_m_040104", InstanceName = InstanceNames.Bones)]
        [RadioReportId("anc_m_050104", InstanceName = InstanceNames.Ligaments)]
        [RadioReportId("anc_m_060104", InstanceName = InstanceNames.SoftTissue)]
        False = 1,

        [RadioReportId("anc_m_040105", InstanceName = InstanceNames.Bones)]
        [RadioReportId("anc_m_050105", InstanceName = InstanceNames.Ligaments)]
        [RadioReportId("anc_m_060105", InstanceName = InstanceNames.SoftTissue)]
        True = 2
    }
}