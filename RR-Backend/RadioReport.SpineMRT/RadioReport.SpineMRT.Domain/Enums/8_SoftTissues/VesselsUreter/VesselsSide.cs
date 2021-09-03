using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum VesselsSide : byte
    {
        None = 0,

        [RadioReportId("spi_m_080327", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(VesselsUretersType.VertebralArtery))]
        [RadioReportId("spi_m_080338", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(VesselsUretersType.CommonIliacArtery) + nameof(VesselsUretersType.ExternIliacArtery))]
        Right = 1,

        [RadioReportId("spi_m_080328", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(VesselsUretersType.VertebralArtery))]
        [RadioReportId("spi_m_080339", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter), CustomConditionName = nameof(VesselsUretersType.CommonIliacArtery) + nameof(VesselsUretersType.ExternIliacArtery))]
        Left = 2
    }
}