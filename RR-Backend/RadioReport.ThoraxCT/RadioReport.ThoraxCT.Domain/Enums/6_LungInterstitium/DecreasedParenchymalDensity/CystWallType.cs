using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum CystWallType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603137", InstanceName = nameof(LungInterstitiumFindingType.DecreasedParenchymalDensity))]
        ThinWalled = 1,

        [RadioReportId("tho_c_0603138", InstanceName = nameof(LungInterstitiumFindingType.DecreasedParenchymalDensity))]
        ThickWalled = 2
    }
}
