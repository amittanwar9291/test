using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Enums.Anamnesis
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("spi_m_020305", InstanceName = nameof(AnamnesisPage.LumbagoSideType))]
        [RadioReportId("spi_m_020307", InstanceName = nameof(AnamnesisPage.NeurologySideType))]
        Right = 1,

        [RadioReportId("spi_m_020306", InstanceName = nameof(AnamnesisPage.LumbagoSideType))]
        [RadioReportId("spi_m_020308", InstanceName = nameof(AnamnesisPage.NeurologySideType))]
        Left = 2
    }
}
