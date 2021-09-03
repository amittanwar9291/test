using RadioReport.Common.Logic.Attributes;
using RadioReport.FeetMRT.Domain.Enums.Bones;
using RadioReport.FeetMRT.Domain.Enums.SoftTissue;

namespace RadioReport.FeetMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("anc_m_040116", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        [RadioReportId("anc_m_060120", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        IDescribe = 1,

        [RadioReportId("anc_m_040118", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        [RadioReportId("anc_m_060121", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        IKnow = 2
    }
}
