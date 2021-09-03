namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum PriorInterventionsFindingType: byte
    {
        None = 0,
        PTAOrStent = 1,
        Thrombectomy = 2,
        Bypass = 3,
        Lysis = 4,
        Embolization = 5,
        Thoracotomy = 6,
        PartialLungResection = 7,
        EndovascularAorticRepair = 8,
        ValveReplacement = 9,
        VitiumClosure = 10,
        AfterTransplantation = 11,
        Pacemaker = 12
    }
}
