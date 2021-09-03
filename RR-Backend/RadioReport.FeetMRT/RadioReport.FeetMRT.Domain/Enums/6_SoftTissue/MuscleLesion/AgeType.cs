using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum AgeType : byte
    {
        None = 0,
        
        [RadioReportId("anc_m_060379", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        Hyperacute = 1,

        [RadioReportId("anc_m_060380", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        Acute = 2,

        [RadioReportId("anc_m_060381", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        Subacute = 3,

        [RadioReportId("anc_m_060382", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        ChronicOrganized = 4
    }
}