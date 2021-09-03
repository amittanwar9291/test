using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum BiRadsMultifocalType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_090114", InstanceName = nameof(SummaryPage.RightBiRadsMultifocalType))]
        [RadioReportId("mam_mx_090119", InstanceName = nameof(SummaryPage.LeftBiRadsMultifocalType))]
        Yes = 1,

        [RadioReportId("mam_mx_090115", InstanceName = nameof(SummaryPage.RightBiRadsMultifocalType))]
        [RadioReportId("mam_mx_090120", InstanceName = nameof(SummaryPage.LeftBiRadsMultifocalType))]
        No = 2
    }
}
