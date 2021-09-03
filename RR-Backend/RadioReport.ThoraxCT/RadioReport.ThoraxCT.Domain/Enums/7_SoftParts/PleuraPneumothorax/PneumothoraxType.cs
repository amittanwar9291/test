using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum PneumothoraxType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0702141", InstanceName = nameof(SoftPartsFindingType.Pneumothorax))]
        ApicalPneumothorax = 1,

        [RadioReportId("tho_c_0702142", InstanceName = nameof(SoftPartsFindingType.Pneumothorax))]
        CoatFormedPneumothorax = 2,
        
        [RadioReportId("tho_c_0702143", InstanceName = nameof(SoftPartsFindingType.Pneumothorax))]
        Seropneumothorax = 3
    }
}