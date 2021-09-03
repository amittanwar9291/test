using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum LesionType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050209", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        Complete = 1,

        [RadioReportId("sho_m_050210", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        PartialLesions = 2
    }
}
