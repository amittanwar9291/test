using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum TendonPartType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0503207", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        PartialThicknessTear = 1,

        [RadioReportId("sho_m_0503212", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Degeneration = 2
    }
}
