using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum BonyAvulsionType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080269", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        IntracorticalEdema = 1
    }
}