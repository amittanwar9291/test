using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum TibiaExtraarticularType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040319", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        AvulsionFracture = 1,

        [RadioReportId("kne_m_040323", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        MetaphysealOneFragment = 2,

        [RadioReportId("kne_m_040324", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        MetaphysealMultifragmentary = 3
    }
}