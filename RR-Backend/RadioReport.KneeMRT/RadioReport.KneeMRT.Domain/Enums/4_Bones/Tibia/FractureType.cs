using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum FractureType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040333", InstanceName = nameof(BonesFinding.FissionAndImpressionFractureType))]
        Lateral = 1,
        
        [RadioReportId("kne_m_040326", InstanceName = nameof(BonesFinding.FissionFractureType))]
        [RadioReportId("kne_m_0403106", InstanceName = nameof(BonesFinding.MultifragmentaryFractureType))]
        LateralPlateau = 2,

        [RadioReportId("kne_m_040397", InstanceName = nameof(BonesFinding.FissionAndImpressionFractureType))]
        Medial = 3,

        [RadioReportId("kne_m_040327", InstanceName = nameof(BonesFinding.FissionFractureType))]
        [RadioReportId("kne_m_0403107", InstanceName = nameof(BonesFinding.MultifragmentaryFractureType))]
        MedialPlateau = 4,

        [RadioReportId("kne_m_0403108", InstanceName = nameof(BonesFinding.MultifragmentaryFractureType))]
        LateralAndMedialPlateu = 5,

        [RadioReportId("kne_m_040328", InstanceName = nameof(BonesFinding.FissionFractureType))]
        [RadioReportId("kne_m_040398", InstanceName = nameof(BonesFinding.FissionAndImpressionFractureType))]
        ObliqueFractureUpToDiaphyseal = 6
    }
}