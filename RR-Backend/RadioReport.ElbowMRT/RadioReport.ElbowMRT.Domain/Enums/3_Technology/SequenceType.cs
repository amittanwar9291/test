namespace RadioReport.ElbowMRT.Domain.Enums
{
    public enum SequenceType : byte
	{
        None = 0,
        DESS = 1,
        GREOrFFE = 2,
        HASTEOrSSH = 3,
        LowMetalArtifactSequence = 4, 
        SEOrTSEOrFSE = 5,
        STIROrSPIROrSPAIR = 6,
        VIBEOrLAVAOrTHRIVE = 7
    }
}
