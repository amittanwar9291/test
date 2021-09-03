using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum DislocationDetailsType: byte
    {
        None = 0,

        [RadioReportId("sho_m_060426", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        DislocationFromBicipitalGroove = 1,

        [RadioReportId("sho_m_060432", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        LongitudinalSplitTypeTearAndIntraarticularDislocation = 2
    }
}
