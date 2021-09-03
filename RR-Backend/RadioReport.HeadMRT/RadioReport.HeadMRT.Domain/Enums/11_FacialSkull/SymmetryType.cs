using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum SymmetryType : byte
    {
        None = 0,

        [RadioReportId("hea_m_110278", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110337", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110287", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102146", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102193", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102292", InstanceName = nameof(FacialSkullFindingType.Skull))]
        [RadioReportId("hea_m_1103212", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        [RadioReportId("hea_m_1103261", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        Symmetrical = 1,

        [RadioReportId("hea_m_110279", InstanceName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110338", InstanceName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110288", InstanceName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102147", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102194", InstanceName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102293", InstanceName = nameof(FacialSkullFindingType.Skull))]
        [RadioReportId("hea_m_1103213", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        [RadioReportId("hea_m_1103262", InstanceName = nameof(FacialSkullFindingType.SalivaryGlands))]
        Asymmetrical = 2
    }
}