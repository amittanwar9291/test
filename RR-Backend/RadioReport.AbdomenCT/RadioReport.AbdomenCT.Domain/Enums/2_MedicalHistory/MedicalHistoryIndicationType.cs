namespace RadioReport.AbdomenCT.Domain.Enums.MedicalHistory
{
    public enum MedicalHistoryIndicationType : byte
    {
        None = 0,
        FreeIntraabdominalGas = 1,
        FreeIntraabdominalFluid = 2,
        Perforation = 3,
        Mass = 4,
        Cyst = 5,
        Inflammation = 6,
        Ileus = 7,
        FistulaFormation = 8,
        Concretion = 9,
        AnastomoticInsufficiency = 10,
        Trauma = 11,
        VascularDiagnostics = 12,
        FollowUpAfterTherapy = 13
    }
}
