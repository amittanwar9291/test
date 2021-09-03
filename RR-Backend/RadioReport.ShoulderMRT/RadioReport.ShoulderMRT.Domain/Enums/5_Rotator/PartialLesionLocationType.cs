using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum PartialLesionLocationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0503202", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Supraspinatus = 1,

        [RadioReportId("sho_m_0503203", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Subscapularis = 2,

        [RadioReportId("sho_m_0503204", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Infraspinatus = 3,

        [RadioReportId("sho_m_0503205", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        TeresMinor = 4
    }
}
