using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Constants;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("kne_m_040104", InstanceName = InstanceNames.Bones)]
        [RadioReportId("kne_m_050104", InstanceName = InstanceNames.Ribbons)]
        [RadioReportId("kne_m_060104", InstanceName = InstanceNames.OsteoInterface)]
        [RadioReportId("kne_m_070104", InstanceName = InstanceNames.Patella)]
        [RadioReportId("kne_m_080104", InstanceName = InstanceNames.SoftParts)]
        False = 1,

        [RadioReportId("kne_m_040105", InstanceName = InstanceNames.Bones)]
        [RadioReportId("kne_m_050105", InstanceName = InstanceNames.Ribbons)]
        [RadioReportId("kne_m_060105", InstanceName = InstanceNames.OsteoInterface)]
        [RadioReportId("kne_m_070105", InstanceName = InstanceNames.Patella)]
        [RadioReportId("kne_m_080105", InstanceName = InstanceNames.SoftParts)]
        True = 2
    }
}