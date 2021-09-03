using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum AorticNodesType : byte
    {
        None = 0,

        [RadioReportId("tho_m_040410", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        Subaortic = 1,

        [RadioReportId("tho_m_040411", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        Paraaortic = 2
    }
}
