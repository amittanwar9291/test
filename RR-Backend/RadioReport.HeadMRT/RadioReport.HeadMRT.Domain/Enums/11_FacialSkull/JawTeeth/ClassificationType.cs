using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum ClassificationType : byte
    {
        None = 0,

        [RadioReportId("hea_m_1103243", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        StageI = 1,

        [RadioReportId("hea_m_1103244", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        StageII = 2,

        [RadioReportId("hea_m_1103245", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        StageIII = 3,

        [RadioReportId("hea_m_1103246", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        StageIV = 4,

        [RadioReportId("hea_m_1103247", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        StageV = 5
    }
}