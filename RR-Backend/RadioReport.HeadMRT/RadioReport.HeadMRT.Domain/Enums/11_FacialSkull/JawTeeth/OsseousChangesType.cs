using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum OsseousChangesType : byte
    {
        None = 0,

        [RadioReportId("hea_m_1105166", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Flattening = 1,

        [RadioReportId("hea_m_1105167", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Osteophytes = 2,

        [RadioReportId("hea_m_1105168", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        LossOfSubstance = 3
    }
}
