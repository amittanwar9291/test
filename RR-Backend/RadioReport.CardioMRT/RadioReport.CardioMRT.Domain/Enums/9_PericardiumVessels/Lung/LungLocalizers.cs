using System;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
    [Flags]
    public enum LungLocalizers : byte
    {
        None = 0,
        UpperLobe = 1,
        MiddleLobe = 2,
        LowerLobeRight = 4,
        UpperLobeLeft = 8,
        LowerLobeLeft = 16
    }
}
