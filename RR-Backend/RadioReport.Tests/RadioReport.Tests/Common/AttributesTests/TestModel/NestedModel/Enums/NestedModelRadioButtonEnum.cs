using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Tests.Common.AttributesTests.TestModel.NestedModel.Enums
{
    public enum NestedModelRadioButtonEnum: byte
    {
        None = 0,
        /// <summary>
        /// InstanceName can be nested like this if NOT in finding
        /// </summary>
        [RadioReportId("tes_m_010203", InstanceName = "NestedModelA")] 
        [RadioReportId("tes_m_010204", InstanceName = "NestedModelB")] 
        Selected = 1,
        [RadioReportId("tes_m_010205", InstanceName = "NestedModelB")] // only in B
        Alternative = 2
    }
}
