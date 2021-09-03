using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum FormType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060341", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        Round = 1,

        [RadioReportId("anc_m_060342", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        Oval = 2,

        [RadioReportId("anc_m_060343", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        Lobulated = 3,

        [RadioReportId("anc_m_060344", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        DumbbellShaped = 4,

        [RadioReportId("anc_m_060345", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        SpindleShaped = 5,

        [RadioReportId("anc_m_060346", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        Irregular = 6
    }
}