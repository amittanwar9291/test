using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum TibiaPartiallyArticularType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040325", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        FissionFracture = 1,

        [RadioReportId("kne_m_040329", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        Impression = 2,

        [RadioReportId("kne_m_040332", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        SplittingAndImpressionFracture = 3
    }
}