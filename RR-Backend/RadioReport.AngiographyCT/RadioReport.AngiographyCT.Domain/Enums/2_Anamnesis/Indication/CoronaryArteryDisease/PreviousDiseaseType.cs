using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.CoronaryArteryDisease
{
    public enum PreviousDiseaseType: byte
    {
        None = 0,
        
        [RadioReportId("ang_c_020322", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        KnownCAD = 1,

        [RadioReportId("ang_c_020323", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        SuspectedCAD = 2
    }
}
