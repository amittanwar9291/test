using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum C2FractureLocalizationType : byte
    {
        None = 0,
        
        [RadioReportId("spi_c_060315", InstanceName = nameof(BonesFindingType.Fracture))]
        C2 = 1,
        
        [RadioReportId("spi_c_060317", InstanceName = nameof(BonesFindingType.Fracture))]
        C1ToC2 = 2
    }
}
