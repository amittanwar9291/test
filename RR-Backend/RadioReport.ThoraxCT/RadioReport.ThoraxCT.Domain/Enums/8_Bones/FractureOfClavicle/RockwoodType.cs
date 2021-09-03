using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum RockwoodType : byte
    {
        None = 0,
        
        [RadioReportId("tho_c_0805202", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Grade1 = 1,

        [RadioReportId("tho_c_0805203", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Grade2 = 2,

        [RadioReportId("tho_c_0805204", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Grade3 = 3,

        [RadioReportId("tho_c_0805205", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Grade4 = 4,

        [RadioReportId("tho_c_0805206", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Grade5 = 5,

        [RadioReportId("tho_c_0805207", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Grade6 = 6
    }
}
