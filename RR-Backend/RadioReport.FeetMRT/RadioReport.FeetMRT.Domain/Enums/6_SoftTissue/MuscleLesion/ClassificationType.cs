using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum ClassificationType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060368", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        MuscleEdema = 1,

        [RadioReportId("anc_m_060369", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        MuscleFibreTearTypeIiIa = 2,

        [RadioReportId("anc_m_060370", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        MuscleBundleTearTypeIiIb = 3,

        [RadioReportId("anc_m_060371", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        MuscleTendonTearTypeIv = 4 
    }
}