using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum MuscularAtrophyType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060553", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        Moderate = 1,

        [RadioReportId("anc_m_060554", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        Advanced = 2
    }
}