using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.SupraaorticVessels
{
    public enum SubarachnoidHemorrhageType : byte
    {
        None = 0,

        [RadioReportId("ang_m_0404124", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404124", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        Thin = 1,

        [RadioReportId("ang_m_0404125", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404125", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        Thick = 2
    }
}
