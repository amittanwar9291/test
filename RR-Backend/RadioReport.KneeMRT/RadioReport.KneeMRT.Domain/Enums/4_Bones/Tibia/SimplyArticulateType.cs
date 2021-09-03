using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum SimplyArticulateType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040399", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        RecessOfTheEminentiaIntercondylaris = 1,

        [RadioReportId("kne_m_0403100", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        WithFractureOfTheEminentiaIntercondylaris = 2
    }
}