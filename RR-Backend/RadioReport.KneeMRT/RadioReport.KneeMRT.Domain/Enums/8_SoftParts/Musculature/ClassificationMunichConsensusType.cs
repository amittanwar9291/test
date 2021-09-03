using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum ClassificationMunichConsensusType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0804215", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        MuscularEdema = 1,

        [RadioReportId("kne_m_0804216", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        MuscleFibreRuptureTypeIIIA = 2,

        [RadioReportId("kne_m_0804218", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        TornMuscleBundleTypeIIIB = 3,

        [RadioReportId("kne_m_0804220", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        TornMuscleOrTendonRuptureTypeIV = 4
    }
}
