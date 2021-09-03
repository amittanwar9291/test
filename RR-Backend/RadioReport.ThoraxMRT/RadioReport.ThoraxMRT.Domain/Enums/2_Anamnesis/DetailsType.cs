using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum DetailsType : byte
    {
        None = 0,

        [RadioReportId("tho_m_020206", InstanceName = nameof(IndicationType.Mass))]
        [RadioReportId("tho_m_020210", InstanceName = nameof(IndicationType.Infection))]
        [RadioReportId("tho_m_020210", InstanceName = nameof(IndicationType.InterstitialLungDisease))]
        [RadioReportId("tho_m_020210", InstanceName = nameof(IndicationType.PulmonaryArteryEmbolism))]
        [RadioReportId("tho_m_020210", InstanceName = nameof(IndicationType.PulmonaryHypertension))]
        [RadioReportId("tho_m_020210", InstanceName = nameof(IndicationType.Pneumothorax))]
        [RadioReportId("tho_m_020210", InstanceName = nameof(IndicationType.CysticFibrosis))]
        [RadioReportId("tho_m_020218", InstanceName = nameof(IndicationType.Arthralgia))]
        FollowUp = 1,

        [RadioReportId("tho_m_020207", InstanceName = nameof(IndicationType.Mass))]
        [RadioReportId("tho_m_020211", InstanceName = nameof(IndicationType.Infection))]
        [RadioReportId("tho_m_020211", InstanceName = nameof(IndicationType.InterstitialLungDisease))]
        [RadioReportId("tho_m_020211", InstanceName = nameof(IndicationType.PulmonaryArteryEmbolism))]
        [RadioReportId("tho_m_020211", InstanceName = nameof(IndicationType.PulmonaryHypertension))]
        [RadioReportId("tho_m_020211", InstanceName = nameof(IndicationType.Pneumothorax))]
        [RadioReportId("tho_m_020211", InstanceName = nameof(IndicationType.CysticFibrosis))]
        [RadioReportId("tho_m_020219", InstanceName = nameof(IndicationType.Arthralgia))]
        SuspicionOf = 2

    }
}
