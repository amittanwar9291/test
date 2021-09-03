using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.SupraaorticVessels
{
    public enum AffectedBranchType : byte
    {
        None = 0,

        [RadioReportId("ang_m_040226", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        SuperiorThyroidArtery = 1,

        [RadioReportId("ang_m_040227", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        LingualArtery = 2,

        [RadioReportId("ang_m_040228", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        FacialArtery = 3,

        [RadioReportId("ang_m_040229", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        OccipitalArtery = 4,

        [RadioReportId("ang_m_040230", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        PosteriorAuricularArtery = 5,

        [RadioReportId("ang_m_040231", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        SuperficialTemporalArtery = 6,

        [RadioReportId("ang_m_040233", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        MaxillaryArtery = 7,

        [RadioReportId("ang_m_040234", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        MiddleMeningealArtery = 8,

        [RadioReportId("ang_m_040235", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        AscendingPharyngealArtery = 9
    }
}
