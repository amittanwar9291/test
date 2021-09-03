using RadioReport.Common.Logic.Attributes;


namespace RadioReport.PelvisMRT.Domain.Enums.LymphNodes
{
    public enum LimitationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_110310", InstanceName = nameof(LymphNodesFindingType.Pathological))]
        Sharp = 1,

        [RadioReportId("pel_m_110311", InstanceName = nameof(LymphNodesFindingType.Pathological))]
        Fuzzy = 2,

        [RadioReportId("pel_m_110312", InstanceName = nameof(LymphNodesFindingType.Pathological))]
        CapsuleBreakthrough = 3
    }
}
