using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Anamnesis
{
    public enum DetailInterventionType : byte
    {
        None = 0,

        [RadioReportId("spi_m_020211", InstanceName = nameof(InterventionType.BoneCementApplication))]
        Vertebroplasty = 1,

        [RadioReportId("spi_m_020212", InstanceName = nameof(InterventionType.BoneCementApplication))]
        Kyphoplasty = 2
    }
}
