using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum LocalizationInTheVertebralArchType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060333", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        RetrosomaticInterruption = 1,

        [RadioReportId("spi_m_060334", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Pediculolysis = 2,

        [RadioReportId("spi_m_060335", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Spondylolysis = 3,

        [RadioReportId("spi_m_060336", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        RetroisthmicInterruption = 4,

        [RadioReportId("spi_m_060338", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        ParaspinosusInterruption = 5,

        [RadioReportId("spi_m_060339", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        SpinaBifidaOcculta = 6
    }
}