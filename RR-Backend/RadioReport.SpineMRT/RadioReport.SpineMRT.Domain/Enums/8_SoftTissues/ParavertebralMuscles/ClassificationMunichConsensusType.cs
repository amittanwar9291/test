using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum ClassificationMunichConsensusType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080259", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        MuscleEdema = 1,

        [RadioReportId("spi_m_080260", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        MuscleFiberTear = 2,

        [RadioReportId("spi_m_080261", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        MuscleBundleTears = 3,

        [RadioReportId("spi_m_080262", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        MuscleTearTendonTear = 4
    }
}