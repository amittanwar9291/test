using RadioReport.Common.Logic.Attributes;
using RadioReport.HandMRT.Domain.Constants;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("han_m_040109", InstanceName = InstanceNames.Bones)]
        [RadioReportId("han_m_080112", InstanceName = InstanceNames.SoftTissue)]
        IKnow = 1,

        [RadioReportId("han_m_0401080", InstanceName = InstanceNames.Bones)]
        [RadioReportId("han_m_080110", InstanceName = InstanceNames.SoftTissue)]
        IDescribe = 2
    }
}
