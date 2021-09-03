using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum ConchaeType : byte
    {
        None = 0,

        [RadioReportId("hea_m_1103131", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        ConchaNasalisSuperior = 1,

        [RadioReportId("hea_m_1103132", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        ConchaNasalisMedia = 2,

        [RadioReportId("hea_m_1103133", InstanceName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        ConchaNasalisInferior = 3
    }
}