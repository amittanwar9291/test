using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum AitkenClassificationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040368", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        Type1 = 1,

        [RadioReportId("kne_m_040369", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        Type2 = 2,

        [RadioReportId("kne_m_040370", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        Type3 = 3,

        [RadioReportId("kne_m_040371", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        Type4 = 4,

        [RadioReportId("kne_m_040372", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        Type5 = 5
    }
}