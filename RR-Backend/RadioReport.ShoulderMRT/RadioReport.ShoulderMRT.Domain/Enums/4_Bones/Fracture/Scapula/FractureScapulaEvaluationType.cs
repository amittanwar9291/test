using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureScapulaEvaluationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040315", InstanceName = nameof(BonesFindingType.Fracture))]
        A14Process = 1,

        [RadioReportId("sho_m_040316", InstanceName = nameof(BonesFindingType.Fracture))]
        B14Body = 2,

        [RadioReportId("sho_m_040317", InstanceName = nameof(BonesFindingType.Fracture))]
        F14GlenoidFossa = 3,

        [RadioReportId("sho_m_040318", InstanceName = nameof(BonesFindingType.Fracture))]
        NotSpecified = 4
    }
}
