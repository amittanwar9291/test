using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum QuantityType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0803164", InstanceName = nameof(RectumFindingType.Fistula))]
        SingleFistula = 1,

        [RadioReportId("pel_m_0803165", InstanceName = nameof(RectumFindingType.Fistula))]
        MultipleFistulas = 2,
    }
}
