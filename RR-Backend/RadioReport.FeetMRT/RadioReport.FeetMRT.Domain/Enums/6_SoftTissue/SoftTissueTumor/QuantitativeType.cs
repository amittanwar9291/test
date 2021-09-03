using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum QuantitativeType : byte
    {
        None = 0,

        [RadioReportId("anc_m_0604102", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        No = 1,

        [RadioReportId("anc_m_0604103", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        Mild = 2,

        [RadioReportId("anc_m_0604104", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        Strong = 3
    }
}