using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum MuscularAtrophyType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0803393", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        Complete = 1,

        [RadioReportId("spi_c_0803394", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        Partial = 2
    }
}
