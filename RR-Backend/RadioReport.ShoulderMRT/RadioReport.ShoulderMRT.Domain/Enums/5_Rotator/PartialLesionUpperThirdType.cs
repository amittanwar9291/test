using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum PartialLesionUpperThirdType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0504221", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        PulleyType3Lesion = 1,

        [RadioReportId("sho_m_0504222", InstanceName = nameof(RotatorFindingType.RotatorCuff))]
        PulleyType4Lesion = 2
    }
}
