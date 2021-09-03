using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum LocalizationLevel: byte
    {
        None = 0,

        [RadioReportId("tho_c_0604206", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        SegmentLevel = 1,

        [RadioReportId("tho_c_0604207", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        LobeLevel = 2
    }
}
