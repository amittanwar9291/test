using RadioReport.Common.Logic.Attributes;
using RadioReport.HandMRT.Domain.Constants;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("han_m_040104", InstanceName = InstanceNames.Bones)]
        [RadioReportId("han_m_050104", InstanceName = InstanceNames.CapsuleAndRibbons)]
        [RadioReportId("han_m_060104", InstanceName = InstanceNames.Tendinopathy)]
        [RadioReportId("han_m_070104", InstanceName = InstanceNames.NerveCompression)]
        [RadioReportId("han_m_080104", InstanceName = InstanceNames.SoftTissue)]
        False = 1,

        [RadioReportId("han_m_040105", InstanceName = InstanceNames.Bones)]
        [RadioReportId("han_m_050105", InstanceName = InstanceNames.CapsuleAndRibbons)]
        [RadioReportId("han_m_060105", InstanceName = InstanceNames.Tendinopathy)]
        [RadioReportId("han_m_070105", InstanceName = InstanceNames.NerveCompression)]
        [RadioReportId("han_m_080105", InstanceName = InstanceNames.SoftTissue)]
        True = 2
    }
}