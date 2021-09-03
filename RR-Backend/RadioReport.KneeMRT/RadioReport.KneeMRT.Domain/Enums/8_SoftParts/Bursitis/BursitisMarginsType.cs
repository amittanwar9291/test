using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum BursitisMarginsType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080330", InstanceName = nameof(SoftPartsFindingType.Bursitis))]
        IllDefinedMargins = 1,

        [RadioReportId("kne_m_080331", InstanceName = nameof(SoftPartsFindingType.Bursitis))]
        Circumscribed = 2

    }
}
