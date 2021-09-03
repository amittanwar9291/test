using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum AvulsionFractureType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040320", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        CapsuleTear = 1,

        [RadioReportId("kne_m_040321", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        Tuberosity = 2,

        [RadioReportId("kne_m_040322", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        EminentiaIntercondylaris = 3,

        [RadioReportId("kne_m_0403109", InstanceName = nameof(BonesFindingType.FracturePatella))]
        ProximalPole = 4,

        [RadioReportId("kne_m_0403110", InstanceName = nameof(BonesFindingType.FracturePatella))]
        DistalPole = 5,

        [RadioReportId("kne_m_0403111", InstanceName = nameof(BonesFindingType.FracturePatella))]
        LateralFacet = 6,

        [RadioReportId("kne_m_0403112", InstanceName = nameof(BonesFindingType.FracturePatella))]
        MediaFacet = 7
    }
}