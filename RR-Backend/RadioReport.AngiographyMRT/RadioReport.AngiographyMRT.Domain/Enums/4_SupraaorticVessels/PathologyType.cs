using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.SupraaorticVessels
{
    public enum PathologyType : byte
	{
		None = 0,

        [RadioReportId("ang_m_040316", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040316", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040316", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040316", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040316", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        StenosisOrOcclusion = 1,

        [RadioReportId("ang_m_040317", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040317", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040317", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040317", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040317", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        Dissection = 2,

        [RadioReportId("ang_m_040319", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040319", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040319", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040319", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040319", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
		InflammatoryChanges = 3,

        [RadioReportId("ang_m_040311", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040311", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040311", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040311", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040311", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        Aneurysm = 4,

        [RadioReportId("ang_m_040353", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        PartialThrombosis = 5,

        [RadioReportId("ang_m_040354", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        CompleteThrombosis = 6
    }
}
