using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.BasalNuclei
{
    public enum ShapeType : byte
    {
        None = 0,

        [RadioReportId("hea_m_070320", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        Round = 1,

        [RadioReportId("hea_m_070321", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        Oval = 2,

        [RadioReportId("hea_m_070322", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        SmallSpotted = 3,

        [RadioReportId("hea_m_070323", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        Triangular = 4,

        [RadioReportId("hea_m_070324", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        Laminar = 5,
    }
}