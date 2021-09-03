using System;

namespace RadioReport.Tests.Common.AttributesTests.TestModel.Enums
{
    [Flags]
    public enum TestLocation : byte // byte is 8-bit so max value is 255 (less than 2^8) if you need bigger values use ulong
    {
        None = 0,
        First = 1 << 0,
        Second = 1 << 1,
        Third = 1 << 2,
        Fourth = 1 << 3
    }
}
