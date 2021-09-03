using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum TendonRetractionClassificationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050415", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        AccordingToBayneAndBateman = 1,

        [RadioReportId("sho_m_050420", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        AccordingToPatte = 2
    }
}
