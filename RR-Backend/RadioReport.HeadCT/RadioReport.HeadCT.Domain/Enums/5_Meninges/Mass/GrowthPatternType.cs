using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Meninges
{
    public enum GrowthPatternType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0503201", InstanceName = nameof(MeningesFindingType.Mass))]
        Displacing = 1,

        [RadioReportId("hea_c_0503202", InstanceName = nameof(MeningesFindingType.Mass))]
        Infiltration = 2
    }
}
