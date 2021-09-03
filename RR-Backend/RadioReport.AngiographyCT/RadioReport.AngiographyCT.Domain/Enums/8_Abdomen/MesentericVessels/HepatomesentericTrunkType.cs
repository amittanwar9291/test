using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
    public enum HepatomesentericTrunkType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0803101", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        Complete = 1,

        [RadioReportId("ang_c_0803103", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        Incomplete = 2
    }
}
