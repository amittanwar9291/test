using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
    public enum IncompleteHepatomesentericTrunkType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0803150", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        RightHepatomesentericTrunk = 1,

        [RadioReportId("ang_c_0803151", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        LeftHepatomesentericTrunk = 2
    }
}
