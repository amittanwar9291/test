using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum ToothAnomaliesType : byte
    {
        None = 0,

        [RadioReportId("hea_m_1103224", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Hypodontia = 1,

        [RadioReportId("hea_m_1103225", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Hyperdontia = 2,

        [RadioReportId("hea_m_1103226", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        HyperdontiaWithPersistingDeciduousTeeth = 3,

        [RadioReportId("hea_m_1103227", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Transposition = 4,

        [RadioReportId("hea_m_1103228", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Retention = 5
    }
}
