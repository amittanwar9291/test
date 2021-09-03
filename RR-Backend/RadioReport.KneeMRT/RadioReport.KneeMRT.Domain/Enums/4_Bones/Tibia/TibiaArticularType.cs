using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum TibiaArticularType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040334", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        SimpleArticularSimpleMetaphyseal = 1,

        [RadioReportId("kne_m_0403101", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        SingleArticularMultifragmentaryMetaphyseal = 2,

        [RadioReportId("kne_m_0403105", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        Multifragmentary = 3
    }
}