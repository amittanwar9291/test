namespace RadioReport.HandMRT.Domain.Enums
{
    public enum SequenceType : byte
	{
        None = 0,
        DedicatedGRE = 1,
        FSE = 2,
        GREOrFFE = 3,
        HASTEOrSSH = 4,
        LowMetalArtifactSequence = 5,
        SEOrTSEOrFSE = 6,
        SpoiledGRE = 7,
        STIROrSPIROrSPAIR = 8,
        VIBEOrLAVAOrTHRIVE = 9
    }
}
