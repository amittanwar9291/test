using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.BrainstemCranialNerves
{
    public enum CranialNerveType : byte
    {
        None = 0,

        [RadioReportId("hea_c_080443", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        IOlfactoryNerve = 1,

        [RadioReportId("hea_c_080444", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        IIOpticNerve = 2,

        [RadioReportId("hea_c_080445", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        IIIOculomotorNerve = 3,

        [RadioReportId("hea_c_080446", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        IVTrochlearNerve = 4,

        [RadioReportId("hea_c_080447", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        VTrigeminalNerve = 5,

        [RadioReportId("hea_c_080448", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        VIAbducensNerve = 6,

        [RadioReportId("hea_c_080449", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        VIIFacialNerve = 7,

        [RadioReportId("hea_c_080450", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        VIIIVestibulocochlearNerve = 8,

        [RadioReportId("hea_c_080451", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        IXGlossopharyngealNerve = 9,

        [RadioReportId("hea_c_080452", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        XVagusNerve = 10,

        [RadioReportId("hea_c_080453", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        XIAccessoryNerve = 11,

        [RadioReportId("hea_c_080454", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        XIIHypoglossalNerve = 12
    }
}