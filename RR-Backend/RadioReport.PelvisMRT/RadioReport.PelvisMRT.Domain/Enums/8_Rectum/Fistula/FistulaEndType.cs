using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum FistulaEndType : byte
    {
        None = 0,

        [RadioReportId("pel_m_080477", InstanceName = nameof(RectumFindingType.Fistula))]
        BlindEndingPerianalSinusTract = 1,

        [RadioReportId("pel_m_080478", InstanceName = nameof(RectumFindingType.Fistula))]
        Fistula = 2
    }
}
