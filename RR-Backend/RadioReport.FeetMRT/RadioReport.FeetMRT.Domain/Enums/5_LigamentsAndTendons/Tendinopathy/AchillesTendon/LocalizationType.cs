using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.LigamentsAndTendons
{
    public enum LocalizationType : byte
    {
        None = 0,

        [RadioReportId("anc_m_050325", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        Diffuse = 1,

        [RadioReportId("anc_m_050326", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        Focal = 2
    }
}