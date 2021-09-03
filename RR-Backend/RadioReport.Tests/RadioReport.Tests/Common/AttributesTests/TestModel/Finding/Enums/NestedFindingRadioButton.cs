using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums
{
    /// <summary>
    /// Radio button with values different on different finding details. Note that here we have no access to parent finding type!
    /// </summary>
    public enum NestedFindingRadioButton : byte
    {
        None = 0,
        [RadioReportId("tes_m_010402", InstanceName = "1")] // only in finding detail 1
        [RadioReportId("tes_m_010404", InstanceName = "2")] // only in finding detail 2
        Selected = 1,
        [RadioReportId("tes_m_010403")] // common
        Alternative = 2
    }
}
