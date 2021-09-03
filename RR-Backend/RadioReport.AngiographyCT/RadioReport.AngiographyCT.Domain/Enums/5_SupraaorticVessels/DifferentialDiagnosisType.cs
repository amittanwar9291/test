using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SupraaorticVessels
{
    public enum DifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("ang_c_0504180", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050453", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050493", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504122", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        TakayasuArteritis = 1,

        [RadioReportId("ang_c_0504181", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050454", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050494", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504123", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        GiantCellArteritis = 2,

        [RadioReportId("ang_c_0504182", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050455", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050495", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504124", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        Collagenosis = 3
    }
}
