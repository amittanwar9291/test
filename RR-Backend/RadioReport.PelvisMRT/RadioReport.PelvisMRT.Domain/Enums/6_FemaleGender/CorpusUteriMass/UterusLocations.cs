using System;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    [Flags]
    public enum UterusLocations : byte
    {
        None = 0,
        SubmucousPedunculated = 1,
        Anteversion = 2,
        AnteversionAndAnteflexion = 4,
        Retroversion = 8,
        RetroversionAndRetroflexion = 16
    }
}
