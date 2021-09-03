using System;

namespace RadioReport.Common.Module.Logic.Enums.Pages.Localizers
{
    [Flags]
    public enum BasalGangliaLocations : ulong
    {
        None = 0,

        ThalamusRight = 1uL << 0,
        PutamenRight = 1uL << 1,
        GlobusPallidusRight = 1uL << 2,
        GlobusPallidusInternalRight = 1uL << 3,
        GlobusPallidusExternalRight = 1uL << 4,
        CaudateNucleusRight = 1uL << 5,
        HeadCaudateNucleusRight = 1uL << 6,
        BodyCaudateNucleusRight = 1uL << 7,
        TailCcaudateNucleusRight = 1uL << 8,
        InternalCapsuleRight = 1uL << 9,
        AnteriorLimbInternalCapsuleRight = 1uL << 10,
        GenuInternalCapsuleRight = 1uL << 11,
        PosteriorLimbInternalCapsuleRight = 1uL << 12,
        ExternalCapsuleRight = 1uL << 13,
        ExtremeCapsuleRight = 1uL << 14,
        ClaustrumRight = 1uL << 15,

        ThalamusLeft = 1uL << 16,
        PutamenLeft = 1uL << 17,
        GlobusPallidusLeft = 1uL << 18,
        GlobusPallidusInternalLeft = 1uL << 19,
        GlobusPallidusExternalLeft = 1uL << 20,
        CaudateNucleusLeft = 1uL << 21,
        HeadCaudateNucleusLeft = 1uL << 22,
        BodyCaudateNucleusLeft = 1uL << 23,
        TailCcaudateNucleusLeft = 1uL << 24,
        InternalCapsuleLeft = 1uL << 25,
        AnteriorLimbInternalCapsuleLeft = 1uL << 26,
        GenuInternalCapsuleLeft = 1uL << 27,
        PosteriorLimbInternalCapsuleLeft = 1uL << 28,
        ExternalCapsuleLeft = 1uL << 29,
        ExtremeCapsuleLeft = 1uL << 30,
        ClaustrumLeft = 1uL << 31
    }
}
