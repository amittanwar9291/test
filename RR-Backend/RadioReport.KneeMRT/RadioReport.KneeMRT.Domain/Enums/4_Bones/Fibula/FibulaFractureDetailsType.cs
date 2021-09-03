using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum FibulaFractureDetailsType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040266", InstanceName = nameof(BonesFindingType.FractureFibulaProximal))]
        ExtraArticular = 1,

        [RadioReportId("kne_m_040267", InstanceName = nameof(BonesFindingType.FractureFibulaProximal))]
        IntraArticular = 2
    }
}