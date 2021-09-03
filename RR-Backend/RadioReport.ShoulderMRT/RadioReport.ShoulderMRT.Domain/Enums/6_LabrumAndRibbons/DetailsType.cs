using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum DetailsType: byte
    {
        None = 0,

        [RadioReportId("sho_m_060503", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        TearingShearingOfCartilage = 1,

        [RadioReportId("sho_m_060504", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        PeriostalDetachment = 2,

        [RadioReportId("sho_m_060505", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        BonyAvulsionWithCapsularLigamentLesion = 3
    }
}
