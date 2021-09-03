using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums
{
    /// <summary>
    /// This is radiobutton occuring in two enums, once in every enum.
    /// The CustomConditionName part is to show that id can be decided in runtime, depending on other enum values.
    /// Common value will show once in every finding.
    /// </summary>
    public enum FindingRadioButton: byte
    {
        None = 0,
        [RadioReportId("tes_m_010304", InstanceName = nameof(TestFindingType.TestFindingA), CustomConditionName = "ConditionA")] // only in finding A when condition is met
        [RadioReportId("tes_m_010306", InstanceName = nameof(TestFindingType.TestFindingB), CustomConditionName = "ConditionB")] // only in finding B when condition is met
        Selected = 1,
        [RadioReportId("tes_m_010305", InstanceName = nameof(TestFindingType.TestFindingA), CustomConditionName = "ConditionA")] // only in finding A when condition is met
        [RadioReportId("tes_m_010307", InstanceName = nameof(TestFindingType.TestFindingB), CustomConditionName = "ConditionB")] // only in finding B when condition is met
        Alternative = 2,
        [RadioReportId("tes_m_010308")] // common
        CommonAlternative = 3
    }
}
