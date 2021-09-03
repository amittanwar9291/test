using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum PatteClassificationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050312", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Segment1 = 1,

        [RadioReportId("sho_m_050313", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Segment2 = 2,

        [RadioReportId("sho_m_050314", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Segment3 = 3,

        [RadioReportId("sho_m_050315", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Segment4 = 4,

        [RadioReportId("sho_m_050316", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Segment5 = 5,

        [RadioReportId("sho_m_050317", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Segment6 = 6
    }
}
