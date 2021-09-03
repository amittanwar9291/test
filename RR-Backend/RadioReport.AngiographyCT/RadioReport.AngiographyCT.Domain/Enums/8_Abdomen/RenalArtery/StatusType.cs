using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
    public enum StatusType : byte
    {
        None = 0,

        [RadioReportId("ang_c_080336", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        NormalPerfusion = 1,

        [RadioReportId("ang_c_080337", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        ReStenosis = 2,

        [RadioReportId("ang_c_080339", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        Occlusion = 3
    }
}
