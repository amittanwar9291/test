using RadioReport.Common.Logic.Attributes;
using RadioReport.ElbowMRT.Domain.Enums.Bones;

namespace RadioReport.ElbowMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("elb_m_0401102", InstanceName = nameof(BonesFindingType.Mass))]
        [RadioReportId("elb_m_070111", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        IDescribe = 1,
        
        [RadioReportId("elb_m_0401103", InstanceName = nameof(BonesFindingType.Mass))]
        [RadioReportId("elb_m_070112", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        IKnow = 2
    }
}
