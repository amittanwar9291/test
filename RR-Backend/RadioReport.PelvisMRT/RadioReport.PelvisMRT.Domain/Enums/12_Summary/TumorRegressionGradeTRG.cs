using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum TumorRegressionGradeTRG : byte
    {
        None = 0,

        [RadioReportId("pel_m_120302")]
        Trg1RadiologicallyCompleteRemissionFibroticScarWithoutTumorSignal = 1,
        
        [RadioReportId("pel_m_120303")]
        Trg2GoodResponseDominanceOfDenseFibrosisPatternWithLowTumorSignal = 2,
        
        [RadioReportId("pel_m_120304")]
        Trg3ModerateResponseSignificantResidualTumorBut50FibrosisOrMucinousChanges = 3,
        
        [RadioReportId("pel_m_120305")]
        Trg4PartialResponseMainlyTumorWithSmallFibrosisAreasWithLowSignalIntensityOrSmallMucinousChanges = 4,
        
        [RadioReportId("pel_m_120306")]
        Trg5NoResponseTumorUnchangedFromBaselineExamination = 5
    }
}
