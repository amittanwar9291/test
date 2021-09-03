using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum RandomDistributionType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0603113", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        TreeInBud = 1,

        [RadioReportId("tho_c_0603114", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        NonTreeInBud = 2
    }
}
