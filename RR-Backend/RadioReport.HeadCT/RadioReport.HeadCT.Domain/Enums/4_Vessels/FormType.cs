using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum FormType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0404138", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404167", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("hea_c_0404167", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404167", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("hea_c_0404167", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        Concentric = 1,

        [RadioReportId("hea_c_0404139", InstanceName = nameof(VesselsFindingType.CircleOfWillisAndCerebralArteries))]
        [RadioReportId("hea_c_0404168", InstanceName = nameof(VesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("hea_c_0404168", InstanceName = nameof(VesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("hea_c_0404168", InstanceName = nameof(VesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("hea_c_0404168", InstanceName = nameof(VesselsFindingType.VertebralArtery))]
        Eccentric = 2
    }
}
