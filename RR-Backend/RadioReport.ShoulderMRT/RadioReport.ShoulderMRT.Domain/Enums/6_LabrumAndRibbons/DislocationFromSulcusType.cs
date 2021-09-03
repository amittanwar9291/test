using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum DislocationFromSulcusType : byte
    {
        None = 0,

        [RadioReportId("sho_m_060428", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        Medial = 1,

        [RadioReportId("sho_m_060429", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        Lateral = 2,

        [RadioReportId("sho_m_060430", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        SSCMidSubstance = 3,

        [RadioReportId("sho_m_060431", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        Dorsal = 4
    }
}
