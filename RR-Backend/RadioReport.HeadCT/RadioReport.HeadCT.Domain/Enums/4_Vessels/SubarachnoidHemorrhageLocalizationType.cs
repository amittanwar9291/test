using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum SubarachnoidHemorrhageLocalizationType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0404188", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404199", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404199", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        Perimesencephalic = 1,

        [RadioReportId("hea_c_0404189", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404200", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404200", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        SylvianFissure = 2,

        [RadioReportId("hea_c_0404190", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404201", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404201", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        ExternalCerebrospinalFluidSpaces = 3
    }
}
