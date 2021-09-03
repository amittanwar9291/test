using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum BonesEpiphysealJointType : byte
    {
        None,

        [RadioReportId("kne_m_040238", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        AgeAppropriately = 1,

        [RadioReportId("kne_m_040239", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        Pathology = 2
    }
}