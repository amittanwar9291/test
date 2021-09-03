using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum LungInterstitiumLocalizationType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0604107", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        MiliaryPatternDiffuse = 1,

        [RadioReportId("tho_c_0604202", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        Peripheral = 2,

        [RadioReportId("tho_c_0604203", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        IrregularSpotted = 3
    }
}
