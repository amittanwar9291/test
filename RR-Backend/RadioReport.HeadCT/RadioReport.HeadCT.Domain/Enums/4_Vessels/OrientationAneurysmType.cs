using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum OrientationAneurysmType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0404179", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        Rostral = 1,

        [RadioReportId("hea_c_0404180", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        Occipital = 2,

        [RadioReportId("hea_c_0404181", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        Temporal = 3,

        [RadioReportId("hea_c_0404182", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        Mesial = 4
    }
}
