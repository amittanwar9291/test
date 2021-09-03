using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum SubarachnoidHemorrhageType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0404185", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404196", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404196", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        Weak = 1,

        [RadioReportId("hea_c_0404186", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404197", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404197", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        Significant = 2
    }
}
