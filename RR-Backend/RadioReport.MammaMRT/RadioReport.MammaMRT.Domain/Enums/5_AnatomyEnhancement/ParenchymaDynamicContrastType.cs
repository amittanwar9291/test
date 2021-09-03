using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum ParenchymaDynamicContrastType : byte
    {
        None = 0,

        [RadioReportId("mam_m_050502-1")]
        ParenchymaWithMinimalCE = 1,

        [RadioReportId("mam_m_050503-1")]
        ParenchymaWithMildCEOrSpottedAccordingToFischer = 2,

        [RadioReportId("mam_m_050504-1")]
        ModerateAndSometimesPatchyAndProtractedCE = 3,

        [RadioReportId("mam_m_050505-1")]
        MarkedParenchymaEnhancementInitiallyNodularPatternSecondaryConfluentApperance = 4
    }
}
