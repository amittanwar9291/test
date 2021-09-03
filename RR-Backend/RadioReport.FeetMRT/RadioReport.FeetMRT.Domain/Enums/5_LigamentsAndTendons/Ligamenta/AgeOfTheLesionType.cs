using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.LigamentsAndTendons
{
    public enum AgeOfTheLesionType : byte
    {
        None = 0,

        [RadioReportId("anc_m_050502", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        Acute = 1,

        [RadioReportId("anc_m_050504", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        Chronic = 2
    }
}