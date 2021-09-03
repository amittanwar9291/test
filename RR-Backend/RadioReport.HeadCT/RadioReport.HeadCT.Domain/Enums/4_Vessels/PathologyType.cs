using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum PathologyType : byte
    {
        None = 0,

        [RadioReportId("hea_c_040245", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_040253", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("hea_c_040295", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0402106", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("hea_c_0402118", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        StenosisOcclusion = 1,

        [RadioReportId("hea_c_040246", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_040254", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("hea_c_040296", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0402107", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("hea_c_0402119", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        Dissection = 2,

        [RadioReportId("hea_c_040247", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_040255", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("hea_c_040297", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0402108", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("hea_c_0402120", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        InflammatoryChange = 3,

        [RadioReportId("hea_c_040248", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_040298", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0402121", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        Aneurysm = 4,

        [RadioReportId("hea_c_0403145", InstanceName = nameof(VesselsFindingType.CerebralVeinsSinusDuraeMatris))]
        PartialThrombosis = 5,

        [RadioReportId("hea_c_0403146", InstanceName = nameof(VesselsFindingType.CerebralVeinsSinusDuraeMatris))]
        CompleteThrombosis = 6
    }
}
