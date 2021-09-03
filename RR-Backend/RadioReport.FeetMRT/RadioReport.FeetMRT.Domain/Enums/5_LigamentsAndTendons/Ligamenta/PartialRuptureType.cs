using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.LigamentsAndTendons
{
    public enum PartialRuptureType : byte
    {
        None = 0,

        [RadioReportId("anc_m_050420", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        LigamentThickeningMoreThan5mm = 1,

        [RadioReportId("anc_m_050421", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        LigamentThinningLessThan2mm = 2
    }
}