using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum PatellaFractureDetailsType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040420", InstanceName = nameof(BonesFinding.PatellaFractureLateralDetailsType))]
        [RadioReportId("kne_m_040423", InstanceName = nameof(BonesFinding.PatellaFractureMedialDetailsType))]
        SagittalTrendingFractureOneFragment = 1,

        [RadioReportId("kne_m_040421", InstanceName = nameof(BonesFinding.PatellaFractureLateralDetailsType))]
        [RadioReportId("kne_m_040424", InstanceName = nameof(BonesFinding.PatellaFractureMedialDetailsType))]
        SagittalTrendingFractureMultiFragmentary = 2
    }
}