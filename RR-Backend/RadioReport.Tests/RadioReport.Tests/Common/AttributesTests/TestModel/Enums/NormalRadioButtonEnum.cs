using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Tests.Common.AttributesTests.TestModel.Enums
{
    public enum NormalRadioButtonEnum: byte
    {
        None = 0,
        [RadioReportId("tes_m_010103")]
        Selected = 1,
        [RadioReportId("tes_m_010104")]
        Alternative = 2
    }
}
