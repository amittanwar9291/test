using RadioReport.AngiographyCT.Domain.Enums.Abdomen;
using RadioReport.AngiographyCT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum CharacterizationType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0604108", InstanceName = InstanceNames.UpperArteries)]
        [RadioReportId("ang_c_080447", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080437", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        Dissecans = 1,

        [RadioReportId("ang_c_0604109", InstanceName = InstanceNames.UpperArteries)]
        [RadioReportId("ang_c_080448", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080440", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        Spurium = 2,

        [RadioReportId("ang_c_0604110", InstanceName = InstanceNames.UpperArteries)]
        [RadioReportId("ang_c_080449", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080441", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        Verum = 3
    }
}
