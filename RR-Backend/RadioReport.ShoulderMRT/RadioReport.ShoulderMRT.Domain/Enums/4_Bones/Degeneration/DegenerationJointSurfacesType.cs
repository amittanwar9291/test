using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum DegenerationJointSurfacesType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040441", InstanceName = nameof(BonesFindingType.Degeneration))]
        HumeralHead = 1,

        [RadioReportId("sho_m_040442", InstanceName = nameof(BonesFindingType.Degeneration))]
        Glenoid = 2,

        [RadioReportId("sho_m_040443", InstanceName = nameof(BonesFindingType.Degeneration))]
        Bipolar = 3
    }
}
