using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Tests.Common.AttributesTests.TestModel.Enums;
using RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums;

namespace RadioReport.Tests.Common.AttributesTests.TestModel.Finding
{
    public class TestFinding: FindingBase, IRadioReportIdConditionEvaluator
    {
        [RadioReportId("tes_m_010301")]
        public TestFindingType FindingType { get; set; }

        public override string InstanceName => FindingType.ToString();

        /// <summary>
        /// This value will show only in finding of type TestFindingA, not anywhere else
        /// </summary>
        [RadioReportId("tes_m_010302", InstanceName = "TestFindingA")]
        public NormalDropdownEnum NormalDropdownEnumA { get; set; }

        /// <summary>
        /// This is common value, will be present in all findings with same rrid (except for given finding suffix like: mam_m_010101-F1)
        /// </summary>
        [RadioReportId("tes_m_010303")]
        public NormalDropdownEnum NormalDropdownEnumCommon { get; set; }

        public FindingRadioButton FindingRadioButton { get; set; }

        // Most complex case, for explanation go into ComplexFindingRadioButton enum.
        [RadioReportId("tes_m_010309l", InstanceName = "ComplexRadioA", IsExportable = false)]
        public ComplexFindingRadioButton ComplexFindingRadioButtonA { get; set; }

        [RadioReportId("tes_m_010309l", InstanceName = "ComplexRadioB", IsExportable = false)]
        public ComplexFindingRadioButton ComplexFindingRadioButtonB { get; set; }

        // Findings can have findings! (Example: SpineMRT 05)
        public List<TestNestedFinding> FindingDetails { get; } = new List<TestNestedFinding>();

        /// <summary>
        /// This method allows for implementation of logic deciding whether some rrid in given circumstances should be included.
        /// For example some rrid might be used only if some enum has correct value.
        /// </summary>
        /// <param name="customConditionId">Evaluted condition</param>
        /// <returns>Information used to determine whether given rrid should be included in report</returns>
        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
               nameof(TestFindingType.TestFindingA) => customConditionId == InstanceName,
               nameof(TestFindingType.TestFindingB) => customConditionId == InstanceName,
               "ConditionA" => NormalDropdownEnumCommon == NormalDropdownEnum.Selected,
               "ConditionB" => NormalDropdownEnumCommon == NormalDropdownEnum.None,
                _ => false
            };
    }
}
