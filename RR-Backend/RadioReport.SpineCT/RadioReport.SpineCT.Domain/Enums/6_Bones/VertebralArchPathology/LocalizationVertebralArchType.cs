using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum LocalizationVertebralArchType : byte
    {
        None = 0,

        [RadioReportId("spi_c_060333", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Retrosomatic = 1,

        [RadioReportId("spi_c_060334", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Pediculolysis = 2,

        [RadioReportId("spi_c_060335", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Spondylolysis = 3,

        [RadioReportId("spi_c_060336", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Retroisthmic = 4,

        [RadioReportId("spi_c_0603214", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Laminolysis = 5,

        [RadioReportId("spi_c_060338", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Paraspinosus = 6,

        [RadioReportId("spi_c_060339", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        SpinaBifidaOcculta = 7
    }
}
