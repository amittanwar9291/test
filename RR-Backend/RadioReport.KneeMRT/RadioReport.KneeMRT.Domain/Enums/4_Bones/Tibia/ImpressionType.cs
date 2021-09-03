using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum ImpressionType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040330", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        Lateral = 1,

        [RadioReportId("kne_m_040331", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        Medial = 2
    }
}