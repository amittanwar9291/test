using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum CorticalisType : byte
    {
        None = 0,

        [RadioReportId("hea_m_1103318", InstanceName = nameof(FacialSkullFindingType.Skull))]
        Intact = 1,

        [RadioReportId("hea_m_1103319", InstanceName = nameof(FacialSkullFindingType.Skull))]
        ThinningScalopping = 2,

        [RadioReportId("hea_m_1103320", InstanceName = nameof(FacialSkullFindingType.Skull))]
        Destruction = 3,

        [RadioReportId("hea_m_1103321", InstanceName = nameof(FacialSkullFindingType.Skull))]
        Neocorticalis = 4
    }
}