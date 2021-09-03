using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum MarginType : byte
    {
        None = 0,
        
        [RadioReportId("spi_c_0603229", InstanceName = nameof(BonesFindingType.MassSpine))]
        Circumscribed = 1,
        
        [RadioReportId("spi_c_0603230", InstanceName = nameof(BonesFindingType.MassSpine))]
        NonCircumscribed = 2
    }
}
