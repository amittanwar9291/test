using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SoftTissues
{
    public enum CharacterizationType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080321", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        BorderlineEnlargedLN = 1,

        [RadioReportId("spi_m_080322", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        Lymphadenopathy = 2
    }
}