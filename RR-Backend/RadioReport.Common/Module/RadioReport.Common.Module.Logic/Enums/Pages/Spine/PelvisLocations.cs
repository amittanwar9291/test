using System;

namespace RadioReport.Common.Module.Logic.Enums.Pages
{
    [Flags]
    public enum PelvisLocations : byte
    {
        None = 0,
        Right = 1,
        Left = 2
    }
}
