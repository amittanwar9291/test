using System;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Tests.Common.AttributesTests.TestModel.Enums
{
    [Flags]
    public enum TestCheckboxLocation : byte
    {
		None = 0,

		[RadioReportId("tes_m_010701")]
		TestValue1 = 1,

		[RadioReportId("tes_m_010702")]
		TestValue2 = 2,

		[RadioReportId("tes_m_010703")]
		TestValue3 = 4,

		[RadioReportId("tes_m_010704")]
		TestValue4 = 8
	}
}
