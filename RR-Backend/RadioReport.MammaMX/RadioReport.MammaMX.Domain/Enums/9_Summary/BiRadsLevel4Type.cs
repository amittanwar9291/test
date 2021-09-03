using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum BiRadsLevel4Type : byte
    {
        None = 0,

        [RadioReportId("mam_mx_090201", InstanceName = nameof(SummaryPage.RightBiRadsLevel4Type))]
        [RadioReportId("mam_mx_090204", InstanceName = nameof(SummaryPage.LeftBiRadsLevel4Type))]
        A = 1,

        [RadioReportId("mam_mx_090202", InstanceName = nameof(SummaryPage.RightBiRadsLevel4Type))]
        [RadioReportId("mam_mx_090205", InstanceName = nameof(SummaryPage.LeftBiRadsLevel4Type))]
        B = 2,

        [RadioReportId("mam_mx_090203", InstanceName = nameof(SummaryPage.RightBiRadsLevel4Type))]
        [RadioReportId("mam_mx_090206", InstanceName = nameof(SummaryPage.LeftBiRadsLevel4Type))]
        C = 3
    }
}
