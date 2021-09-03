using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.PeripheralArteryDiseasePAD
{
    public enum StadiumAccordingToFontaineType : byte
    {
        None = 0,
        
        [RadioReportId("ang_c_020205", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        StageI = 1,

        [RadioReportId("ang_c_020206", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        StageIIA = 2,

        [RadioReportId("ang_c_020207", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        StageIIB = 3,

        [RadioReportId("ang_c_020208", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        StageIII = 4,

        [RadioReportId("ang_c_020209", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        StageIV = 5
    }
}
