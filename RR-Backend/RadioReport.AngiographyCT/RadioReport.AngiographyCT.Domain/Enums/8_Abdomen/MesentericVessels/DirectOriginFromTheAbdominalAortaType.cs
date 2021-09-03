using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
    public enum DirectOriginFromTheAbdominalAortaType : byte
    {
        None = 0,

        [RadioReportId("ang_c_080395", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        LeftGastricArtery = 1,

        [RadioReportId("ang_c_080396", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        CommonHepaticArtery = 2,

        [RadioReportId("ang_c_080397", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        CommonOrigin = 3
    }
}
