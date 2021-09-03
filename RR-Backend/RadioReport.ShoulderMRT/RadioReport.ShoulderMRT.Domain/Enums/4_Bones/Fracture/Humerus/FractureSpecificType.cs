using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureSpecificType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0405201", InstanceName = nameof(BonesFindingType.Fracture))]
        AProximalThird = 1,

        [RadioReportId("sho_m_0405202", InstanceName = nameof(BonesFindingType.Fracture))]
        BMiddleThird = 2,

        [RadioReportId("sho_m_0405203", InstanceName = nameof(BonesFindingType.Fracture))]
        CDistalThird = 3,

        [RadioReportId("sho_m_0405204", InstanceName = nameof(BonesFindingType.Fracture))]
        IProximal = 4,

        [RadioReportId("sho_m_0405205", InstanceName = nameof(BonesFindingType.Fracture))]
        JDiaphysealOnly = 5,

        [RadioReportId("sho_m_0405206", InstanceName = nameof(BonesFindingType.Fracture))]
        KDistalDiaphysealmetaphyseal = 6
    }
}
