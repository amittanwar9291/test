using System;

namespace RadioReport.KneeMRT.Domain.Enums
{
    [Flags]
    public enum LocalizationGradeClassifications : byte
    {
        None = 0,
        Normal = 1,
        Grade1 = 2,
        Grade2a = 4,
        Grade2b = 8,
        Grade2c = 16,
        Grade3 = 32
    }
}
