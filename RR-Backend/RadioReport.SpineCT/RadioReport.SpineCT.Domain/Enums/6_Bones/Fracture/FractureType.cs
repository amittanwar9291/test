using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum FractureType : byte
    {
        None = 0,

        [RadioReportId("spi_c_060320", InstanceName = nameof(BonesFindingType.Fracture))]
        A0Classification = 1,

        [RadioReportId("spi_c_060321", InstanceName = nameof(BonesFindingType.Fracture))]
        GenantClassification = 2,
        
        [RadioReportId("spi_c_0603200", InstanceName = nameof(BonesFindingType.Fracture))]
        DenisThreeColumnModel = 3,

        [RadioReportId("spi_c_060322", InstanceName = nameof(BonesFindingType.Fracture))]
        NoSpec = 4
    }
}
