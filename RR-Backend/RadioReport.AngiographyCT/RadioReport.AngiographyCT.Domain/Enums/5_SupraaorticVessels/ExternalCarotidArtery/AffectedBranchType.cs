using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.SupraaorticVessels
{
    public enum AffectedBranchType : byte
    {
        None = 0,

        [RadioReportId("ang_c_050228", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        SuperiorThyroidArtery = 1,

        [RadioReportId("ang_c_050229", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        LingualArtery = 2,

        [RadioReportId("ang_c_050230", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        FacialArtery = 3,

        [RadioReportId("ang_c_050231", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        OccipitalArtery = 4,

        [RadioReportId("ang_c_050232", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        PosteriorAuricularArtery = 5,

        [RadioReportId("ang_c_050233", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        SuperficialTemporalArtery = 6,

        [RadioReportId("ang_c_050234", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        MaxillaryArtery = 7,

        [RadioReportId("ang_c_050235", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        MiddleMeningealArtery = 8,

        [RadioReportId("ang_c_050236", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        AscendingPharyngealArtery = 9
    }
}
