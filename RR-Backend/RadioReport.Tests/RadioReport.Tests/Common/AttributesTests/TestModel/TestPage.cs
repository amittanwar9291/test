using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Tests.Common.AttributesTests.TestModel.Enums;
using RadioReport.Tests.Common.AttributesTests.TestModel.Finding;
using RadioReport.Tests.Common.AttributesTests.TestModel.NestedModel;

namespace RadioReport.Tests.Common.AttributesTests.TestModel
{
    public class TestPage: ModelBase
    {
        [RadioReportId("tes_m_010101")]
        public bool TestCheckbox { get; set; }

        /// <summary>
        /// Case when we want to override value of field. This will always show in report as MyValue, no matter if true / false
        /// Also this shows how translation can be overridden if we do not want to use default one.
        /// </summary>
        [RadioReportId("tes_m_010501", AlternativeTranslationSuffix = "MyTranslation", Value = "MyValue")]
        public bool TestValue { get; set; }

        /// <summary>
        /// Example localizer usage. Note that NO rrid are present inside the enum
        /// </summary>
        [RadioReportId("tes_m_010601")]
        public TestLocation TestLocalizer { get; set; }

        public TestCheckboxLocation TestCheckboxLocalizer { get; set; }

        [RadioReportId("tes_m_010102")]
        public NormalDropdownEnum TestDropdown { get; set; }

        public NormalRadioButtonEnum TestRadioButton { get; set; }

        /// <summary>
        /// Example nested model, IsExportable = false is important! We cannot export reference types!
        /// </summary>
        [RadioReportId("tes_m_010201l", InstanceName = nameof(NestedModelA), IsExportable = false)]
        public TestNestedModel NestedModelA { get; set; }

        /// <summary>
        /// Same model as above. It is necessary in this case to have different InstanceName
        /// </summary>
        [RadioReportId("tes_m_010201l", InstanceName = nameof(NestedModelB), IsExportable = false)]
        public TestNestedModel NestedModelB { get; set; }

        public List<TestFinding> Findings { get; } = new List<TestFinding>();

        // DO NOT DO THIS UNLESS NECESSARY, this is just a test, to see if using InstanceName in enum works with enum values without it (ie. common)
        [RadioReportId("test_m_010105l", InstanceName = "test1", IsExportable = false)]
        public AnotherNormalRadioButtonEnum TestRadioButtonWithInstanceNames { get; set; }
    }
}
