using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum MuscleAtrophyType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080528", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        Complete = 1,

        [RadioReportId("spi_m_080529", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        Partial = 2
    }
}