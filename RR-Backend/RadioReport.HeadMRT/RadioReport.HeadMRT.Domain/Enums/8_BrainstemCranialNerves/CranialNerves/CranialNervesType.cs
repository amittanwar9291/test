using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves
{
    public enum CranialNerveType : byte
    {
        None = 0,

        [RadioReportId("hea_m_080443", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        IOlfactoryNerve = 1,

        [RadioReportId("hea_m_080444", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        IIOpticNerve = 2,

        [RadioReportId("hea_m_080445", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        IIIOculomotorNerve = 3,

        [RadioReportId("hea_m_080446", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        IVTrochlearNerve = 4,

        [RadioReportId("hea_m_080447", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        VTrigeminalNerve = 5,

        [RadioReportId("hea_m_080448", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        VIAbducensNerve = 6,

        [RadioReportId("hea_m_080449", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        VIIFacialNerve = 7,

        [RadioReportId("hea_m_080450", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        VIIIVestibulocochlearNerve = 8,

        [RadioReportId("hea_m_080451", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        IXGlossopharyngealNerve = 9,

        [RadioReportId("hea_m_080452", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        XVagusNerve = 10,

        [RadioReportId("hea_m_080453", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        XIAccessoryNerve = 11,

        [RadioReportId("hea_m_080454", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        XIIHypoglossalNerve = 12
    }
}