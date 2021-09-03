using RadioReport.Common.Logic.Attributes;
using RadioReport.HandMRT.Domain.Constants;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum ContrastAgentEnhancementQuantitativeType : byte
    {
        None = 0,

        [RadioReportId("han_m_040266", InstanceName = InstanceNames.Bones)]
        [RadioReportId("han_m_080415", InstanceName = InstanceNames.SoftTissue)]
        Powerful = 1,

        [RadioReportId("han_m_040267", InstanceName = InstanceNames.Bones)]
        [RadioReportId("han_m_080416", InstanceName = InstanceNames.SoftTissue)]
        Low = 2,

        [RadioReportId("han_m_040268", InstanceName = InstanceNames.Bones)]
        [RadioReportId("han_m_080417", InstanceName = InstanceNames.SoftTissue)]
        No = 3

    }
}
