using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum PulleyLesionDetailsType: byte
    {
        None = 0,
        
        [RadioReportId("sho_m_060209", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        [RadioReportId("sho_m_060340", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        Type1IsolatedSGHLLesion = 1,

        [RadioReportId("sho_m_060210", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        [RadioReportId("sho_m_060341", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        Type2SGHLLesionAndPartialTearOfSSP = 2,

        [RadioReportId("sho_m_060211", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        [RadioReportId("sho_m_060342", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        Type3SGHLLesionAndPartialTearOfSSP = 3,

        [RadioReportId("sho_m_060212", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        [RadioReportId("sho_m_060343", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        Type4CombinationOfPulley = 4
    }
}
