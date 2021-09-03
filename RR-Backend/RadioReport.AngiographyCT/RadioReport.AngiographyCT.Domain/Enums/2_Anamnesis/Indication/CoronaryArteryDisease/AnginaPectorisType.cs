using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.CoronaryArteryDisease
{
    public enum AnginaPectorisType: byte
    {
        None = 0,
        
        [RadioReportId("ang_c_020228", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        Unstable = 1,

        [RadioReportId("ang_c_020229", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        Stable = 2
    }
}
