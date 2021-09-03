using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum CharacterizationType : byte
    {
        None = 0,

        [RadioReportId("hea_m_1103230", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        OdentogenicCyst = 1,

        [RadioReportId("hea_m_1103231", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        RadicularCyst = 2,

        [RadioReportId("hea_m_1103232", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        FollicularCyst = 3,

        [RadioReportId("hea_m_1103233", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        PenetratingCyst = 4,

        [RadioReportId("hea_m_1103234", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        ResidualCyst = 5,

        [RadioReportId("hea_m_1103235", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Keratocyst = 6,

        [RadioReportId("hea_m_1103236", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        LateralPeriodontalCyst = 7,

        [RadioReportId("hea_m_1103237", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        GingviaCyst = 8,

        [RadioReportId("hea_m_1103238", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        OtherNonOdontogenicCyst = 9
    }
}