using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.LigamentsAndTendons
{
    public enum LigamentaType : byte
    {
        None = 0,

        [RadioReportId("anc_m_050203", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        AnkleJoint = 1,

        [RadioReportId("anc_m_050204", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        TearOfTheSpringLigamentComplex = 2,

        [RadioReportId("anc_m_050205", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        LesionOfTheTarsalSinus = 3,

        [RadioReportId("anc_m_050206", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        BifurcateLigament = 4,

        [RadioReportId("anc_m_050207", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        TearOfThePlantarLigament = 5
    }
}