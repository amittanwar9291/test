using RadioReport.Common.Logic.Attributes;
using RadioReport.NeckMRT.Domain.Constants;

namespace RadioReport.NeckMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("nec_m_040104", InstanceName = InstanceNames.Pharynx)]
        [RadioReportId("nec_m_050104", InstanceName = InstanceNames.Larynx)]
        [RadioReportId("nec_m_060104", InstanceName = InstanceNames.SoftTissues)]
        [RadioReportId("nec_m_070104", InstanceName = InstanceNames.Thyroid)]
        [RadioReportId("nec_m_080104", InstanceName = InstanceNames.LymphNodes)]
        [RadioReportId("nec_m_090104", InstanceName = InstanceNames.Vessels)]
        [RadioReportId("nec_m_100104", InstanceName = InstanceNames.Bones)]
        False = 1,

        [RadioReportId("nec_m_040105", InstanceName = InstanceNames.Pharynx)]
        [RadioReportId("nec_m_050105", InstanceName = InstanceNames.Larynx)]
        [RadioReportId("nec_m_060105", InstanceName = InstanceNames.SoftTissues)]
        [RadioReportId("nec_m_070105", InstanceName = InstanceNames.Thyroid)]
        [RadioReportId("nec_m_080105", InstanceName = InstanceNames.LymphNodes)]
        [RadioReportId("nec_m_090105", InstanceName = InstanceNames.Vessels)]
        [RadioReportId("nec_m_100105", InstanceName = InstanceNames.Bones)]
        True = 2
    }
}