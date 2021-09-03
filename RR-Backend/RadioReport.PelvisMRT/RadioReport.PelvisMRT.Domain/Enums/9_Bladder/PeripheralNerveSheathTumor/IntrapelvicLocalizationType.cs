using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum IntrapelvicLocalizationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_090263", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        Parailiacal = 1,

        [RadioReportId("pel_m_090264", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        Presacral = 2,

        [RadioReportId("pel_m_090265", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        Subperitoneal = 3
    }
}