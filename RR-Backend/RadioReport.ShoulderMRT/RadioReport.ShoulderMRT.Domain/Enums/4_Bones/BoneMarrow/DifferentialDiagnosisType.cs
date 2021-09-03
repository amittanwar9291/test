using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum DifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0402210", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        StressFracture = 1,

        [RadioReportId("sho_m_0402211", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        DisuseOsteopenia = 2
    }
}
