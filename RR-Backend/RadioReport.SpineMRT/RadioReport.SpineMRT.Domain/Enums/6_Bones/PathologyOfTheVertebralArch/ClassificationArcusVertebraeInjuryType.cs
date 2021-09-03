using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum ClassificationArcusVertebraeInjuryType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060455", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Pediculolysis))]
        [RadioReportId("spi_m_060461", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Spondylolysis))]
        Grade0 = 1,

        [RadioReportId("spi_m_060456", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Pediculolysis))]
        [RadioReportId("spi_m_060462", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Spondylolysis))]
        Grade1 = 2,

        [RadioReportId("spi_m_060457", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Pediculolysis))]
        [RadioReportId("spi_m_060463", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Spondylolysis))]
        Grade2 = 3,

        [RadioReportId("spi_m_060458", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Pediculolysis))]
        [RadioReportId("spi_m_060464", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Spondylolysis))]
        Grade3 = 4,

        [RadioReportId("spi_m_060459", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Pediculolysis))]
        [RadioReportId("spi_m_060465", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch), CustomConditionName = nameof(LocalizationInTheVertebralArchType.Spondylolysis))]
        Grade4 = 5
    }
}