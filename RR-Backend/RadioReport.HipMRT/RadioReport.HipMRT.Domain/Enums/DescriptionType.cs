using RadioReport.Common.Logic.Attributes;
using RadioReport.HipMRT.Bones.Domain.Enums;
using RadioReport.HipMRT.Domain.Enums.SoftTissue;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("hip_m_060111", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        [RadioReportId("hip_m_040114", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        [RadioReportId("hip_m_080111", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        IKnow = 1,

        [RadioReportId("hip_m_060112", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
        [RadioReportId("hip_m_040113", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        [RadioReportId("hip_m_080112", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        IDescribe = 2
    }
}