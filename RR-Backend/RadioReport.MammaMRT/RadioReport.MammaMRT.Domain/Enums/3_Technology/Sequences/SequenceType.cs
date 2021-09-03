namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum SequenceType : byte
    {
        None = 0,
        SEOrTSEOrFSE = 1,
        GREOrFFE = 2,
        HASTEOrSSH = 3,
        STIROrSPIROrSPAIR = 4,
        VIBEOrLAVAOrTHRIVE = 5
    }
}
