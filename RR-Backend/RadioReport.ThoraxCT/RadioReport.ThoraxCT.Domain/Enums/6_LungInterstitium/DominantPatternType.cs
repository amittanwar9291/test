using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum DominantPatternType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0602105")]
        Nodular = 1,

        [RadioReportId("tho_c_0602106")]
        Reticular = 2,

        [RadioReportId("tho_c_0602107")]
        IncreasedParenchymalDensity = 3,

        [RadioReportId("tho_c_0602108")]
        DecreasedParenchymalDensity = 4
    }
}
