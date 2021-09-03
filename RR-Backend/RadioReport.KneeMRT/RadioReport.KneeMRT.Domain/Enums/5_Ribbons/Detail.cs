using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum Detail : byte
    {
        None = 0,

        [RadioReportId("kne_m_050216")]
        SprainGradeOneInjury = 1,

        [RadioReportId("kne_m_050217")]
        PartialTearGradeTwoInjury = 2,

        [RadioReportId("kne_m_050218")]
        CompleteRuptureGradeThreeInjury = 3,

        [RadioReportId("kne_m_050219")]
        BursitisBetweenDeepAndMiddleLayers = 4,

        [RadioReportId("kne_m_050222")]
        BonyLigamentRupture = 5
    }
}
