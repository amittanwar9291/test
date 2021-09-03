using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum BonesEpiphysealJointDetailsType : byte
    {
        None = 0,
        
        [RadioReportId("kne_m_0403115", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        ChronicTrauma = 1,

        [RadioReportId("kne_m_040366", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        Fracture
    }
}