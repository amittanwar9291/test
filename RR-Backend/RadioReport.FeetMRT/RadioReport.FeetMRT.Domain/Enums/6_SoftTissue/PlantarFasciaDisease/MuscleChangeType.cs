using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum MuscleChangeType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060449", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        SignalElevation = 1,

        [RadioReportId("anc_m_060450", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        FattyDegeneration = 2,

        [RadioReportId("anc_m_060451", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        MuscularAtrophy = 3
    }
}
