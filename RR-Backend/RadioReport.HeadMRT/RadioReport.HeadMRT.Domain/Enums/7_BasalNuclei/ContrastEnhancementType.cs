using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.BasalNuclei
{
    public enum ContrastEnhancementType : byte
    {
        None = 0,

        [RadioReportId("hea_m_070524", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        No = 1,

        [RadioReportId("hea_m_070525", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        Low = 2,

        [RadioReportId("hea_m_070526", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        Strong = 3
    }
}