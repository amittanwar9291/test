using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.LigamentsAndTendons
{
    public enum AssociatedFindingsType : byte
    {
        None = 0,
        
        [RadioReportId("anc_m_050450", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        Tendinitis = 1,

        [RadioReportId("anc_m_050451", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        Tendovaginitis = 2
    }
}