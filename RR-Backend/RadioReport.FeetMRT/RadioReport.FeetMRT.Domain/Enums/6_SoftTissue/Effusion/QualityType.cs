using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum QualityType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060402", InstanceName = nameof(SoftTissueFindingType.Effusion))]
        Haemarthros = 1,

        [RadioReportId("anc_m_060403", InstanceName = nameof(SoftTissueFindingType.Effusion))]
        CapsuleRupture = 2
    }
}