using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum AffectedNerveType : byte
    {
        None = 0,

        [RadioReportId("pel_m_090338", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        SciaticNerveRight = 1,

        [RadioReportId("pel_m_090339", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        SciaticNerveLeft = 2
    }
}