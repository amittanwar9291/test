using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxMRT.Domain.Constants;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("tho_m_040104", InstanceName = InstanceNames.Mediastinum)]
        [RadioReportId("tho_m_050104", InstanceName = InstanceNames.LungParenchyma)]
        [RadioReportId("tho_m_060104", InstanceName = InstanceNames.Pleura)]
        [RadioReportId("tho_m_070104", InstanceName = InstanceNames.Bones)]
        False = 1,

        [RadioReportId("tho_m_040105", InstanceName = InstanceNames.Mediastinum)]
        [RadioReportId("tho_m_050105", InstanceName = InstanceNames.LungParenchyma)]
        [RadioReportId("tho_m_060105", InstanceName = InstanceNames.Pleura)]
        [RadioReportId("tho_m_070105", InstanceName = InstanceNames.Bones)]
        True = 2
    }
}