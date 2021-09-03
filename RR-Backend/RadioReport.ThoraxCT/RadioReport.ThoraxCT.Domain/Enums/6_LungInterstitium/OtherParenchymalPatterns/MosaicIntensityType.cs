using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum MosaicIntensityType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603143", InstanceName = nameof(LungInterstitiumFindingType.OtherParenchymalPatterns))]
        Marked = 1,

        [RadioReportId("tho_c_0603144", InstanceName = nameof(LungInterstitiumFindingType.OtherParenchymalPatterns))]
        Mild = 2
    }
}
