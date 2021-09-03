using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum BiRadsMulticentricType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_090117", InstanceName = nameof(SummaryPage.RightBiRadsMulticentricType))]
        [RadioReportId("mam_mx_090121", InstanceName = nameof(SummaryPage.LeftBiRadsMulticentricType))]
        Yes = 1,

        [RadioReportId("mam_mx_090118", InstanceName = nameof(SummaryPage.RightBiRadsMulticentricType))]
        [RadioReportId("mam_mx_090122", InstanceName = nameof(SummaryPage.LeftBiRadsMulticentricType))]
        No = 2
    }
}
