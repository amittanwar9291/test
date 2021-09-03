using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Meninges
{
    public enum GrowthPatternType : byte
    {
        None = 0,

        [RadioReportId("hea_m_0503201", InstanceName = nameof(MeningesFindingType.Mass))]
        Displacing = 1,

        [RadioReportId("hea_m_0503202", InstanceName = nameof(MeningesFindingType.Mass))]
        Infiltration = 2
    }
}
