namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum SequenceType : byte
    {
        None = 0,
        SEOrTSEOrFSE = 1,
        GREOrFFE = 2,
        SpoiledGRE = 3,
        HASTEOrSSH = 4,
        STIROrSPIROrSPAIR = 5,
        VIBEOrLAVAOrTHRIVE = 6,
        DedicatedGRE = 7,
        FSE = 8,
        LowMetalArtifactSequence = 9
    }
}
