using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum ExtrapelvicLocalizationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_090267", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        SoftTissueRight = 1,

        [RadioReportId("pel_m_090268", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        SoftTissueLeft = 2,

        [RadioReportId("pel_m_090269", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        SoftTissueVentral = 3,

        [RadioReportId("pel_m_090270", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        SoftTissueDorsal = 4,

        [RadioReportId("pel_m_090271", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        ThighVentral = 5,

        [RadioReportId("pel_m_090272", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        ThighDorsal = 6,

        [RadioReportId("pel_m_090273", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        ThighMedial = 7,

        [RadioReportId("pel_m_090274", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        ThighLateral = 8
    }
}