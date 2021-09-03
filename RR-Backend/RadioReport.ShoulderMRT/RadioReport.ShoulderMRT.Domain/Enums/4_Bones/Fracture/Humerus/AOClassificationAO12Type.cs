using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum AOClassificationAO12Type : byte
    {
        None = 0,

        [RadioReportId("sho_m_0403201", InstanceName = nameof(BonesFindingType.Fracture))]
        ASimpleFracture = 1,

        [RadioReportId("sho_m_0403202", InstanceName = nameof(BonesFindingType.Fracture))]
        BWedgeFracture = 2,

        [RadioReportId("sho_m_0403203", InstanceName = nameof(BonesFindingType.Fracture))]
        CMultifragmentaryFracture = 3,

        [RadioReportId("sho_m_0403204", InstanceName = nameof(BonesFindingType.Fracture))]
        NotSpecified = 4
    }
}
