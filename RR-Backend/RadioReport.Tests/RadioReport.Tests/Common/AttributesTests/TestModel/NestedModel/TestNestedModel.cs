using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Tests.Common.AttributesTests.TestModel.Enums;
using RadioReport.Tests.Common.AttributesTests.TestModel.NestedModel.Enums;

namespace RadioReport.Tests.Common.AttributesTests.TestModel.NestedModel
{
    public class TestNestedModel: ModelBase
    {
        /// <summary>
        /// Value from both models will be present in report but with different Ids
        /// </summary>
        [RadioReportId("tes_m_010201", InstanceName = "NestedModelA")]
        [RadioReportId("tes_m_010202", InstanceName = "NestedModelB")]
        public NormalDropdownEnum NormalNestedDropdownEnum { get; set; }

        // NOTE: RadioButtons cannot be duplicated within same nested model, unless it is conditional and IRadioReportIdConditionEvaluator can be used
        public NestedModelRadioButtonEnum NestedModelRadioButtonEnum { get; set; }
    }
}
