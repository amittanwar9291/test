using System;

namespace RadioReport.Common.Logic.Enums
{
    [Flags]
    public enum ReportTypes
    {
        None = 0,
        Doctor = 1,
        Patient = 2
    }
}
