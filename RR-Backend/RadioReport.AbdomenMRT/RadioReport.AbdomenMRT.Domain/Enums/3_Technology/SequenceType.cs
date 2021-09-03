namespace RadioReport.AbdomenMRT.Domain.Enums
{
    public enum SequenceType : byte
    {
        None = 0,
        DIXON = 1,
        DualOrMultiEcho = 2,
        FIESTAOrTrueFISPOrBalancedFFE = 3,
        GREOrFFE = 4,
        GRET2 = 5,
        HASTEOrSSH = 6,
        MulitvaneOrBLADE = 7,
        PSIROrTIROrRIR = 8,
        SEOrTSEOrFSE = 9,
        STIROrSPIROrSPAIR = 10,
        TIRM = 11,
        TWIST = 12,
        VIBEOrLAVAOrTHRIVE = 13,
        InPhaseOrOpposedPhase = 14
    }
}
