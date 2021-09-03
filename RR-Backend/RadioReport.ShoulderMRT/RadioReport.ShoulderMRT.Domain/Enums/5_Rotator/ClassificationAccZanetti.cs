using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum ClassificationAccZanettiType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050508", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        PositiveTangentSign = 1,

        [RadioReportId("sho_m_050509", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        NegativeTangentSign = 2
    }
}
