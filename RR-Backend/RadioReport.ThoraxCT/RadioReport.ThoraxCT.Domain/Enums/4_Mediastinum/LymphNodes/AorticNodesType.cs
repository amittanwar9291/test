using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum AorticNodesType : byte
    {
        None = 0,

        [RadioReportId("tho_c_040411", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        Subaortic = 1,

        [RadioReportId("tho_c_040412", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        Paraaortic = 2
    }
}
