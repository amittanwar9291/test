using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum LocalizationWithinTheMuscleType : byte  
    {
        None = 0,
     
        [RadioReportId("spi_m_080428", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        ProximalEnthesis = 1,

        [RadioReportId("spi_m_080429", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        ProximalMusculotendinousJunction = 2,

        [RadioReportId("spi_m_080430", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        ProximalThird = 3,

        [RadioReportId("spi_m_080431", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        MiddleThird = 4
    }
}