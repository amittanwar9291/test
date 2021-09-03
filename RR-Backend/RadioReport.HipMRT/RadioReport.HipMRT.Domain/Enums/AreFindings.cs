using RadioReport.Common.Logic.Attributes;
using RadioReport.HipMRT.Domain.Constants;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("hip_m_040104", InstanceName = InstanceNames.Bones)]
        [RadioReportId("hip_m_050104", InstanceName = InstanceNames.CartilageAndLabrum)]
        [RadioReportId("hip_m_060104", InstanceName = InstanceNames.CapsuleAndLigaments)]
        [RadioReportId("hip_m_070104", InstanceName = InstanceNames.MusclesAndTendons)]
        [RadioReportId("hip_m_080104", InstanceName = InstanceNames.SoftTissue)]
        False = 1,

        [RadioReportId("hip_m_040105", InstanceName = InstanceNames.Bones)]
        [RadioReportId("hip_m_050105", InstanceName = InstanceNames.CartilageAndLabrum)]
        [RadioReportId("hip_m_060105", InstanceName = InstanceNames.CapsuleAndLigaments)]
        [RadioReportId("hip_m_070105", InstanceName = InstanceNames.MusclesAndTendons)]
        [RadioReportId("hip_m_080105", InstanceName = InstanceNames.SoftTissue)]
        True = 2
    }
}