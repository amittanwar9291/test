using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum MosaicPatternType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603140", InstanceName = nameof(LungInterstitiumFindingType.OtherParenchymalPatterns))]
        BronchogenicAirTrapping = 1,

        [RadioReportId("tho_c_0603141", InstanceName = nameof(LungInterstitiumFindingType.OtherParenchymalPatterns))]
        Vasogenic = 2
    }
}
