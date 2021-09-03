using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum RatingFractureDetailsType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0404880", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        CapsuleTearMedial = 1,

        [RadioReportId("kne_m_040489", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        CapsuleTearLateral = 2,

        [RadioReportId("kne_m_0404129", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(MetaphysealMultifragmentaryType.IntactWedge) + nameof(MetaphysealMultifragmentaryType.FragmentedWedge))]
        [RadioReportId("kne_m_0404105", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(FractureType.ObliqueFractureUpToDiaphyseal))]
        [RadioReportId("kne_m_0404109", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(MetaphysealMultifragmentaryType.IntactWedge) + nameof(MetaphysealMultifragmentaryType.FragmentedWedge))]
        Medial = 3,

        [RadioReportId("kne_m_0404128", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(MetaphysealMultifragmentaryType.IntactWedge) + nameof(MetaphysealMultifragmentaryType.FragmentedWedge))]
        [RadioReportId("kne_m_0404104", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(FractureType.ObliqueFractureUpToDiaphyseal))]
        [RadioReportId("kne_m_0404108", InstanceName = nameof(BonesFindingType.FractureTibiaProximal), CustomConditionName = nameof(MetaphysealMultifragmentaryType.IntactWedge) + nameof(MetaphysealMultifragmentaryType.FragmentedWedge))]
        Lateral = 4,

        [RadioReportId("kne_m_040490", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        Anterior = 5,

        [RadioReportId("kne_m_040491", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        Posterior = 6,

        [RadioReportId("kne_m_040494", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        Anterolateral = 7,

        [RadioReportId("kne_m_040495", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        Posteriolateral = 8,

        [RadioReportId("kne_m_040496", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        LateralCentral = 9,

        [RadioReportId("kne_m_040499", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        Anteromedial = 10,

        [RadioReportId("kne_m_0404100", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        Posteriomedial = 11,

        [RadioReportId("kne_m_0404101", InstanceName = nameof(BonesFindingType.FractureTibiaProximal))]
        MedialCentral = 12
    }
}