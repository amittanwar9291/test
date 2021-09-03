using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum InterdigitalSpaceType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060515", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        D2D3 = 1,

        [RadioReportId("anc_m_060516", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        D3D4 = 2
    }
}