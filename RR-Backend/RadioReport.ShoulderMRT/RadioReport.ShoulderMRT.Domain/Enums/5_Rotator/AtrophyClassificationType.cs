using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum AtrophyClassificationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050502", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        AccordingToGoutallier = 1,

        [RadioReportId("sho_m_050507", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        AccordingToZanetti = 2
    }
}
