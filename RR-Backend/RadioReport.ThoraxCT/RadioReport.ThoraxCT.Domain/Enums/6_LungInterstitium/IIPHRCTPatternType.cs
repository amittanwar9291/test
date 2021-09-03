using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum IIPHRCTPatternType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603201", InstanceName = nameof(LungInterstitiumPage.IIPHRCTPatternType1))]
        [RadioReportId("tho_c_0604133", InstanceName = nameof(LungInterstitiumPage.IIPHRCTPatternType2))]
        [RadioReportId("tho_c_0605133", InstanceName = nameof(LungInterstitiumPage.IIPHRCTPatternType3))]
        UIP = 1,

        [RadioReportId("tho_c_0603202", InstanceName = nameof(LungInterstitiumPage.IIPHRCTPatternType1))]
        [RadioReportId("tho_c_0604134", InstanceName = nameof(LungInterstitiumPage.IIPHRCTPatternType2))]
        [RadioReportId("tho_c_0605134", InstanceName = nameof(LungInterstitiumPage.IIPHRCTPatternType3))]
        ProbableUIP = 2,

        [RadioReportId("tho_c_0603203", InstanceName = nameof(LungInterstitiumPage.IIPHRCTPatternType1))]
        [RadioReportId("tho_c_0604135", InstanceName = nameof(LungInterstitiumPage.IIPHRCTPatternType2))]
        [RadioReportId("tho_c_0605135", InstanceName = nameof(LungInterstitiumPage.IIPHRCTPatternType3))]
        PossibleUIP = 3
    }
}