using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum ComplicationsType : byte
    {
        None = 0,
        
        [RadioReportId("spi_c_0605226", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        NoIndication = 1,
        
        [RadioReportId("spi_c_0605227", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        Complications = 2
    }
}
