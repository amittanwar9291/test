namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum SequenceType : byte
    {
        None = 0,
        DualOrMultiEcho = 1,
        FIESTAOrTrueFISPOrBalancedFFE = 2,
        GRET2 = 3,
        GREOrFFE = 4,
        HASTEOrSSH = 5,
        SEOrTSEOrFSE = 6,
        STIROrSPIROrSPAIR = 7,
        VIBEOrLAVAOrTHRIVE = 8
    }
}
