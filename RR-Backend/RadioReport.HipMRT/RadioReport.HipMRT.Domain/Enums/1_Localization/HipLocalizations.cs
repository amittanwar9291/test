using System;

namespace RadioReport.HipMRT.Domain.Enums
{
    [Flags]
    public enum HipLocalizations: byte
    {
        None = 0,
        Right = 1,
        Left = 2,
        Both = 3
    }
}
