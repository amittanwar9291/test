using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum OtherNonOdontogenicCystType : byte
    {
        None = 0,

        [RadioReportId("hea_m_1103239", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        NasopalatineCyst = 1,

        [RadioReportId("hea_m_1103240", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        GlobulomaxillaryCyst = 2,

        [RadioReportId("hea_m_1103241", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        NasolabialCyst = 3
    }
}
