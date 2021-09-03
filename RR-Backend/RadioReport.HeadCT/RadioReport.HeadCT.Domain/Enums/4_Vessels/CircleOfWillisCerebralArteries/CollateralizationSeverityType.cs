using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum CollateralizationSeverityType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0404146", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        No = 1,

        [RadioReportId("hea_c_0404147", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        Low = 2,

        [RadioReportId("hea_c_0404148", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        Moderate = 3,

        [RadioReportId("hea_c_0404149", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        Severe = 4
    }
}
