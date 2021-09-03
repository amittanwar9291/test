namespace RadioReport.AngiographyMRT.Domain.Enums.Technology
{
    public enum NonContrastEnhancedMRAngiographyType : byte
    {
        None = 0,
        TOFAngiography = 1,
        PhaseContrastAngiography = 2,
        PhaseContrastAngiographyPhaseContrastMeasurement = 3,
        ECGTriggeredNonEnhancedMRAngiography = 4
    }
}