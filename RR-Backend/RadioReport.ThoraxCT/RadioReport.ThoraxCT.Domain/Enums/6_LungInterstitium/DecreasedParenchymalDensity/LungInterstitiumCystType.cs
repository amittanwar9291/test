using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum LungInterstitiumCystType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603134", InstanceName = nameof(LungInterstitiumFindingType.DecreasedParenchymalDensity))]
        AirFilled = 1,

        [RadioReportId("tho_c_0603135", InstanceName = nameof(LungInterstitiumFindingType.DecreasedParenchymalDensity))]
        LiquidFilled = 2
    }
}
