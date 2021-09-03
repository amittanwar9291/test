using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum LabrumMorphologyResultType : byte
    {
        None = 0,

        [RadioReportId("sho_m_060402", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        Absent = 1,

        [RadioReportId("sho_m_060403", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        Foramen = 2,

        [RadioReportId("sho_m_060405", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        Recessus = 3,

        [RadioReportId("sho_m_060407", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        Fraying = 4,

        [RadioReportId("sho_m_060408", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        Detachment = 5,

        [RadioReportId("sho_m_060409", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        DetachmentWithFlap = 6,

        [RadioReportId("sho_m_060410", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        DetachmentWithRotation = 7,

        [RadioReportId("sho_m_060411", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        BucketHandleTear = 8
    }
}
