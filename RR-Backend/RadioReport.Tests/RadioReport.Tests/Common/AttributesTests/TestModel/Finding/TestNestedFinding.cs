using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums;

namespace RadioReport.Tests.Common.AttributesTests.TestModel.Finding
{
    public class TestNestedFinding : FindingBase
    {
        // Finding detail has to have InstanceName based on Number!
        public override string InstanceName => Number.ToString();

        [RadioReportId("tes_m_010401")]
        public bool NormalCheckbox { get; set; }

        public NestedFindingRadioButton NestedFindingRadioButton { get; set; }
    }
}
