using RadioReport.Common.Logic.Attributes;
using RadioReport.HandMRT.Domain.Enums.SoftTissue;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum ContrastEnhancementType : byte
    {
        None = 0,

        [RadioReportId("han_m_040487", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        [RadioReportId("han_m_0800517", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        No = 1,

        [RadioReportId("han_m_040488", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        [RadioReportId("han_m_0800518", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Weak = 2,

        [RadioReportId("han_m_040489", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        [RadioReportId("han_m_0800519", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Strong = 3
    }
}
