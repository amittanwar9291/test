using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum VesselsNervesType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0802128", InstanceName = nameof(SoftPartsFindingType.VesselsNerves))]
        PeripheralNerveSheathTumor = 1,

        [RadioReportId("kne_m_0802129", InstanceName = nameof(SoftPartsFindingType.VesselsNerves))]
        PoplitealArteryAneurysm = 2,

        [RadioReportId("kne_m_0802132", InstanceName = nameof(SoftPartsFindingType.VesselsNerves))]
        VenousVaricosis = 3
    }
}
