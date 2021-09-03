using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum HematomaCharacterizationType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080433", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        Hyperacute = 1,

        [RadioReportId("spi_m_080434", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        Acute = 2,

        [RadioReportId("spi_m_080435", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        Subacute = 3,

        [RadioReportId("spi_m_080436", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        ChronicOrganised = 4
    }
}