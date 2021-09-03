using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum AOClassificationFractureType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0404201", InstanceName = nameof(BonesFindingType.Fracture))]
        A1SpiralFracture = 1,

        [RadioReportId("sho_m_0404202", InstanceName = nameof(BonesFindingType.Fracture))]
        A2ObliqueFractureOver30 = 2,

        [RadioReportId("sho_m_0404203", InstanceName = nameof(BonesFindingType.Fracture))]
        A3TransverseFractureBelow30 = 3,

        [RadioReportId("sho_m_0404204", InstanceName = nameof(BonesFindingType.Fracture))]
        B2WithIntactWedge = 4,

        [RadioReportId("sho_m_0404205", InstanceName = nameof(BonesFindingType.Fracture))]
        B3WithFragmentedWedge = 5,

        [RadioReportId("sho_m_0404206", InstanceName = nameof(BonesFindingType.Fracture))]
        C2IntermediateFragmentIntact = 6,

        [RadioReportId("sho_m_0404207", InstanceName = nameof(BonesFindingType.Fracture))]
        C3IntermediateSegmentComminuted = 7
    }
}
