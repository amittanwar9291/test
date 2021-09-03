using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.BasalNuclei
{
    public enum DominantFindingType : byte
    {
        None = 0,

        [RadioReportId("hea_m_070520", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        DiffusionRestriction = 1,

        [RadioReportId("hea_m_070521", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        T1wSignalEnhancement = 2,

        [RadioReportId("hea_m_070522", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        T2wSignalEnhancement = 3
    }
}