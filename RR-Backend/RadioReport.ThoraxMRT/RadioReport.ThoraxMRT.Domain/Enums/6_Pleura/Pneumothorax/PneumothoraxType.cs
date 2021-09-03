using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum PneumothoraxType : byte
    {
        None = 0,

        [RadioReportId("tho_m_060239", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
        ApicalPneumothorax = 1,

        [RadioReportId("tho_m_060240", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
        AnterolateralPneumothorax = 2,
        
        [RadioReportId("tho_m_060241", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
        Seropneumothorax = 3
    }
}