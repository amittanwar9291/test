using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum SarcoidosisType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603161", InstanceName = nameof(LungInterstitiumPage.SarcoidosisType1))]
        [RadioReportId("tho_c_0604124", InstanceName = nameof(LungInterstitiumPage.SarcoidosisType2))]
        [RadioReportId("tho_c_0605124", InstanceName = nameof(LungInterstitiumPage.SarcoidosisType3))]
        Stage2 = 1,

        [RadioReportId("tho_c_0603162", InstanceName = nameof(LungInterstitiumPage.SarcoidosisType1))]
        [RadioReportId("tho_c_0604125", InstanceName = nameof(LungInterstitiumPage.SarcoidosisType2))]
        [RadioReportId("tho_c_0605125", InstanceName = nameof(LungInterstitiumPage.SarcoidosisType3))]
        Stage3 = 2,

        [RadioReportId("tho_c_0603163", InstanceName = nameof(LungInterstitiumPage.SarcoidosisType1))]
        [RadioReportId("tho_c_0604126", InstanceName = nameof(LungInterstitiumPage.SarcoidosisType2))]
        [RadioReportId("tho_c_0605126", InstanceName = nameof(LungInterstitiumPage.SarcoidosisType3))]
        Stage4 = 3
    }
}