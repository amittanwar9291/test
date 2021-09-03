using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum ReducedParenchymaDensityPatternType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603131", InstanceName = nameof(LungInterstitiumFindingType.DecreasedParenchymalDensity))]
        HoneyCombing = 1,

        [RadioReportId("tho_c_0603132", InstanceName = nameof(LungInterstitiumFindingType.DecreasedParenchymalDensity))]
        MicrocysticHoneyCombing = 2,

        [RadioReportId("tho_c_0603133", InstanceName = nameof(LungInterstitiumFindingType.DecreasedParenchymalDensity))]
        Cysts = 3
    }
}