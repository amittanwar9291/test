using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
    public enum FurtherVariantsType : byte
    {
        None = 0,

        [RadioReportId("ang_c_080502", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        GastroduodenalArteryAberrantHepaticArtery = 1,

        [RadioReportId("ang_c_080503", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        GastroduodenalArterySplenicArtery = 2,

        [RadioReportId("ang_c_080504", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        MedialSegment = 3
    }
}
