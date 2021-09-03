using System;


namespace RadioReport.PelvisMRT.Domain.Enums.LymphNodes
{
    [Flags]
    public enum LocalizationTypes : int
    {
        None = 0,
        Retroperitoneal = 1 << 0,
        IliakaCommunisRight = 1 << 1,
        IliakaCommunisLeft = 1 << 2,
        IliakaExternaRight = 1 << 3,
        IliakaExternaLeft = 1 << 4,
        IliakaInternaRight = 1 << 5,
        IliakaInternaLeft = 1 << 6,
        ObturatorGroupRight = 1 << 7,
        ObturatorGroupLeft = 1 << 8,
        Mesorectal = 1 << 9,
        Presacral = 1 << 10,
        Parametric = 1 << 11,
        Perisigmoidal = 1 << 12,
        Pericecal = 1 << 13,
        InguinalRight = 1 << 14,
        InguinalLeft = 1 << 15,
        FemoralisCommunisRight = 1 << 16,
        FemoralisCommunisLeft = 1 << 17
    }
}
