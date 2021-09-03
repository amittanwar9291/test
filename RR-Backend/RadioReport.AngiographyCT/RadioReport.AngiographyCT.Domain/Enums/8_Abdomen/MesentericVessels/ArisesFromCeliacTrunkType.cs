using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
    public enum ArisesFromCeliacTrunkType : byte
    {
        None = 0,

        [RadioReportId("ang_c_080418", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        DorsalPancreaticArtery = 1,

        [RadioReportId("ang_c_080419", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        RightHepaticArtery = 2,

        [RadioReportId("ang_c_080420", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        GastroduodenalArtery = 3,

        [RadioReportId("ang_c_080421", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        InferiorPhrenicArteries = 4,

        [RadioReportId("ang_c_080422", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        LeftHepaticArtery = 5,

        [RadioReportId("ang_c_080423", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        TrifurkationOfRHALHAAndGDA = 6
    }
}
