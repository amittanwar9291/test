using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum LocalizationSideType : byte
    {
        None = 0,

        [RadioReportId("spi_m_0602101", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Right = 1,

        [RadioReportId("spi_m_0602102", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Left = 2,

        [RadioReportId("spi_m_0602103", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        Both = 3
    }
}