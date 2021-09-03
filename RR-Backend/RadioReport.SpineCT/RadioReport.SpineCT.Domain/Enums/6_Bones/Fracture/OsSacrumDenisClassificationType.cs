using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum OsSacrumDenisClassificationType : byte
    {
        None = 0,
        
        [RadioReportId("spi_c_0605209", InstanceName = nameof(BonesFindingType.Fracture))]
        ZoneI = 1,
        
        [RadioReportId("spi_c_0605266", InstanceName = nameof(BonesFindingType.Fracture))]
        ZoneII = 2,
        
        [RadioReportId("spi_c_0605267", InstanceName = nameof(BonesFindingType.Fracture))]
        ZoneIII = 3
    }
}
