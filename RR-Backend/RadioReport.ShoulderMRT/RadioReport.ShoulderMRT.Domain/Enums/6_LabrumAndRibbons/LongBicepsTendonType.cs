using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum LongBicepsTendonType: byte
    {
        None = 0,

        [RadioReportId("sho_m_060223", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        Rupture = 1,

        [RadioReportId("sho_m_060224", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        Degeneration = 2,

        [RadioReportId("sho_m_060225", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        Tendinitis = 3,

        [RadioReportId("sho_m_060226", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        PulleyLesion = 4,

        [RadioReportId("sho_m_060227", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        SLAPLasionTypeIV = 5,

        [RadioReportId("sho_m_060517", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        Avulsion = 6
    }
}
