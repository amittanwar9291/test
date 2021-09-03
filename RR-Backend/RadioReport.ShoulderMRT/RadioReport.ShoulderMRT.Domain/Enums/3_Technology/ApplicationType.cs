using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum ApplicationType : byte
    {
        None = 0,

        [RadioReportId("uni_y_030202")]
        Intravenous = 1,

        [RadioReportId("uni_y_030204")]
        Intraarticular = 2
    }
}
