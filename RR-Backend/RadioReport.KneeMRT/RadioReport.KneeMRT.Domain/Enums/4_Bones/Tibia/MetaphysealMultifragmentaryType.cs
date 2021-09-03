using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum MetaphysealMultifragmentaryType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040394", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(TibiaExtraarticularType.MetaphysealMultifragmentary))]
        [RadioReportId("kne_m_0403102", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(TibiaArticularType.SingleArticularMultifragmentaryMetaphyseal))]
        IntactWedge = 1,

        [RadioReportId("kne_m_040395", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(TibiaExtraarticularType.MetaphysealMultifragmentary))]
        [RadioReportId("kne_m_0403103", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(TibiaArticularType.SingleArticularMultifragmentaryMetaphyseal))]
        FragmentedWedge = 2,

        [RadioReportId("kne_m_040396", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(TibiaExtraarticularType.MetaphysealMultifragmentary))]
        [RadioReportId("kne_m_0403104", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(TibiaArticularType.SingleArticularMultifragmentaryMetaphyseal))]
        MultiFragmented = 3
    }
}
