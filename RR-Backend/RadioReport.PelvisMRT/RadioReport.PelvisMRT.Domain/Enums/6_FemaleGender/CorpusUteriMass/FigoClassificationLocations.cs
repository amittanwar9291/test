using System;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    [Flags]
    public enum FigoClassificationLocations : int
    {
        None = 0,
        SubmucousPedunculated = 1,
        SubmucousLessThan50 = 1 << 1,
        Submucous50OrMore = 1 << 2,
        IntramuralMyomaWithContact = 1 << 3,
        IntramuralMyoma = 1 << 4,
        SubserousMyoma50OrMore = 1 << 5,
        SubserousMyomaLessThan50 = 1 << 6,
        SubserousPedunculatedMyoma = 1 << 7,
        Other = 1 << 8
    }
}
