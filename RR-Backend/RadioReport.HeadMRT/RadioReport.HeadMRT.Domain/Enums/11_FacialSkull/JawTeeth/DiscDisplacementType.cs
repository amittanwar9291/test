using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum DiscDisplacementType : byte
    {
        None = 0,

        [RadioReportId("hea_m_1104192", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Partial = 1,

        [RadioReportId("hea_m_1104193", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Complete = 2,

        [RadioReportId("hea_m_1104194", InstanceName = nameof(FacialSkullFindingType.JawTeeth))]
        Avulsion = 3
    }
}