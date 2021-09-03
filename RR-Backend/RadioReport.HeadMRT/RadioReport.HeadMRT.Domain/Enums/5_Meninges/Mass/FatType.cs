using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Meninges
{
    public enum FatType : byte
    {
        None = 0,

        [RadioReportId("hea_m_0502202", InstanceName = nameof(MeningesFindingType.Mass))]
        Microscopic = 1,

        [RadioReportId("hea_m_0502203", InstanceName = nameof(MeningesFindingType.Mass))]
        Macroscopic = 2
    }
}
