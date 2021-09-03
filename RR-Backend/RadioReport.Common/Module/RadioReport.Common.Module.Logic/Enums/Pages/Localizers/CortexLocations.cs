using System;

namespace RadioReport.Common.Module.Logic.Enums.Pages.Localizers
{
    [Flags]
    public enum CortexLocations : ulong
    {
        None = 0,
        Cerebellum = 1uL << 0,
        CerebellarVermis = 1uL << 1,

        FrontalLobeRight = 1uL << 2,
        SuperiorFrontalGyrusRight = 1uL << 3,
        MiddleFrontalGyrusRight = 1uL << 4,
        PrecentralGyrusRight = 1uL << 5,
        CentrumSemiovaleRight = 1uL << 6,
        ParietalLobeRight = 1uL << 7,
        PostcentralLobeRight = 1uL << 8,
        OccipitalLobeRight = 1uL << 9,
        InsulaRight = 1uL << 10,
        TemporalLobeRight = 1uL << 11,
        HippocampusRight = 1uL << 12,
        TemporalPoleRight = 1uL << 13,
        OperculumRight = 1uL << 14,
        CerebellarHemisphereRight = 1uL << 15,
        CerebellarTonsilRight = 1uL << 16,
        
        FrontalLobeLeft = 1uL << 17,
        SuperiorFrontalGyrusLeft = 1uL << 18,
        MiddleFrontalGyrusLeft = 1uL << 19,
        PrecentralGyrusLeft = 1uL << 20,
        CentrumSemiovaleLeft = 1uL << 21,
        ParietalLobeLeft = 1uL << 22,
        PostcentralLobeLeft = 1uL << 23,
        OccipitalLobeLeft = 1uL << 24,
        InsulaLeft = 1uL << 25,
        TemporalLobeLeft = 1uL << 26,
        HippocampusLeft = 1uL << 27,
        TemporalPoleLeft = 1uL << 28,
        OperculumLeft = 1uL << 29,
        CerebellarHemisphereLeft = 1uL << 30,
        CerebellarTonsilLeft = 1uL << 31
    }
}
