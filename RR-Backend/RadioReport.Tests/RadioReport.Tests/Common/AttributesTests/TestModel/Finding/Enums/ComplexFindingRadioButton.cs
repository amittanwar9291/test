using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums
{
    /// <summary>
    /// Most complex case possible. We want to use some enum in two findings, but also in every finding in two places.
    /// With every usage also different rrid.
    /// Note that in this case only, we filter rrids for findings with CustomConditionName. This is workaround, however
    /// "normal" InstanceName is already used to determine which usage in finding this is.
    /// Of course two is not the limit, however at some point this would stop being readable.
    /// </summary>
    public enum ComplexFindingRadioButton: byte
    {
        None = 0,
        [RadioReportId("tes_m_010309", InstanceName = "ComplexRadioA", CustomConditionName = nameof(TestFindingType.TestFindingA))]
        [RadioReportId("tes_m_010311", InstanceName = "ComplexRadioB", CustomConditionName = nameof(TestFindingType.TestFindingA))]
        [RadioReportId("tes_m_010313", InstanceName = "ComplexRadioA", CustomConditionName = nameof(TestFindingType.TestFindingB))]
        [RadioReportId("tes_m_010315", InstanceName = "ComplexRadioB", CustomConditionName = nameof(TestFindingType.TestFindingB))]
        Selected = 1,
        [RadioReportId("tes_m_010310", InstanceName = "ComplexRadioA", CustomConditionName = nameof(TestFindingType.TestFindingA))]
        [RadioReportId("tes_m_010312", InstanceName = "ComplexRadioB", CustomConditionName = nameof(TestFindingType.TestFindingA))]
        [RadioReportId("tes_m_010314", InstanceName = "ComplexRadioA", CustomConditionName = nameof(TestFindingType.TestFindingB))]
        [RadioReportId("tes_m_010316", InstanceName = "ComplexRadioB", CustomConditionName = nameof(TestFindingType.TestFindingB))]
        Alternative = 2,
        [RadioReportId("tes_m_010317", InstanceName = "ComplexRadioA")]
        [RadioReportId("tes_m_010318", InstanceName = "ComplexRadioB")]
        FindingCommonAlternative = 3 // common ids for findings
    }
}
