using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.SupraaorticVessels
{
    public enum DifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("ang_m_0404111", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404111", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404111", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404111", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        TakayasuArteritis = 1,

        [RadioReportId("ang_m_0404112", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404112", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404112", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404112", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        GiantCellArteritis = 2,

        [RadioReportId("ang_m_0404113", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404113", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404113", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404113", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        Collagenosis = 3
    }
}
