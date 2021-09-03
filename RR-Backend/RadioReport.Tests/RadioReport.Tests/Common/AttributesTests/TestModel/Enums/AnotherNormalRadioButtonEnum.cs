using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Tests.Common.AttributesTests.TestModel.Enums
{
    public enum AnotherNormalRadioButtonEnum: byte
    {
        None = 0,
        [RadioReportId("tes_m_010105")]
        Selected = 1,
        [RadioReportId("tes_m_010106", InstanceName = "test1")]
        Alternative = 2
    }
}
