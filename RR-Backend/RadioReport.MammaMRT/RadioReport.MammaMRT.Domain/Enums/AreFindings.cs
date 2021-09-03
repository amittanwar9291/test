using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Constants;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("mam_m_060104", InstanceName = InstanceNames.Diagnosis)]
        False = 1,

        [RadioReportId("mam_m_060105", InstanceName = InstanceNames.Diagnosis)]
        True = 2
    }
}