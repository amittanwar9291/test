using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum MetaphysealOneFragmentType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040391", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        SpiralFracture = 1,

        [RadioReportId("kne_m_040392", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        ObliqueFracture = 2,

        [RadioReportId("kne_m_040393", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        TransverseFracture = 3
    }
}
