using System;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    [Flags]
    public enum FistulaLocalizer : byte
    {
        None = 0,
        Anterior = 1,
        LeftLateral3OClock = 2,
        Posterior = 4,
        RightLateral9OClock = 8
    }
}
