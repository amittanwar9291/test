using System.Collections;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Tests.Common.AttributesTests.TestModel;
using RadioReport.Tests.Common.AttributesTests.TestModel.Enums;
using RadioReport.Tests.Common.AttributesTests.TestModel.Finding;
using RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums;
using RadioReport.Tests.Common.AttributesTests.TestModel.NestedModel;
using RadioReport.Tests.Common.AttributesTests.TestModel.NestedModel.Enums;

namespace RadioReport.Tests.Common.AttributesTests
{
    class RadioReportIdAttributeReaderTestsData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] {
#region Test page definition
                new TestPage
                {
                    TestCheckbox = true,
                    TestLocalizer = TestLocation.First,
                    TestCheckboxLocalizer = TestCheckboxLocation.TestValue2 | TestCheckboxLocation.TestValue4,
                    TestValue = true,
                    TestDropdown = NormalDropdownEnum.Selected,
                    TestRadioButton = NormalRadioButtonEnum.Selected,
                    TestRadioButtonWithInstanceNames = AnotherNormalRadioButtonEnum.Alternative,
                    NestedModelA = new TestNestedModel
                    {
                        NormalNestedDropdownEnum = NormalDropdownEnum.Selected,
                        NestedModelRadioButtonEnum = NestedModelRadioButtonEnum.Selected
                    },
                    NestedModelB = new TestNestedModel
                    {
                        NormalNestedDropdownEnum = NormalDropdownEnum.None,
                        NestedModelRadioButtonEnum = NestedModelRadioButtonEnum.Alternative
                    },
                    Findings =
                    {
                        new TestFinding
                        {
                            Number = 1,
                            FindingType = TestFindingType.TestFindingA,
                            NormalDropdownEnumA = NormalDropdownEnum.Selected,
                            NormalDropdownEnumCommon = NormalDropdownEnum.Selected,
                            FindingRadioButton = FindingRadioButton.Selected,
                            ComplexFindingRadioButtonA = ComplexFindingRadioButton.Selected,
                            ComplexFindingRadioButtonB = ComplexFindingRadioButton.FindingCommonAlternative,
                            FindingDetails = 
                            {
                                new TestNestedFinding
                                {
                                    Number = 1,
                                    ParentNumber = 1,
                                    NormalCheckbox = true,
                                    NestedFindingRadioButton = NestedFindingRadioButton.Selected
                                },
                                new TestNestedFinding
                                {
                                    Number = 2,
                                    ParentNumber = 1,
                                    NormalCheckbox = false,
                                    NestedFindingRadioButton = NestedFindingRadioButton.Alternative
                                }
                            }
                        },
                        new TestFinding
                        {
                            Number = 2,
                            FindingType = TestFindingType.TestFindingB,
                            NormalDropdownEnumCommon = NormalDropdownEnum.None,
                            FindingRadioButton = FindingRadioButton.CommonAlternative,
                            ComplexFindingRadioButtonA = ComplexFindingRadioButton.Alternative,
                            ComplexFindingRadioButtonB = ComplexFindingRadioButton.FindingCommonAlternative,
                        },
                    }
                },
#endregion
                new List<RadioReportValue>
                {
#region Normal model
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010101",
                        TypeName = "System.Boolean",
                        Value = true,
                        TranslationKey = "Boolean_True",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010501",
                        TypeName = "System.String",
                        Value = "MyValue",
                        TranslationKey = "String_MyValue_MyTranslation",
                        AlternativeTranslationSuffix = "MyTranslation",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010601",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.TestLocation",
                        Value = "First",
                        TranslationKey = "TestLocation_First",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010701",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.TestCheckboxLocation",
                        Value = "False",
                        TranslationKey = "TestCheckboxLocation_False",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010702",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.TestCheckboxLocation",
                        Value = "True",
                        TranslationKey = "TestCheckboxLocation_True",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010703",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.TestCheckboxLocation",
                        Value = "False",
                        TranslationKey = "TestCheckboxLocation_False",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010704",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.TestCheckboxLocation",
                        Value = "True",
                        TranslationKey = "TestCheckboxLocation_True",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010102",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.NormalDropdownEnum",
                        Value = "Selected",
                        TranslationKey = "NormalDropdownEnum_Selected",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010103",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.NormalRadioButtonEnum",
                        Value = "True",
                        TranslationKey = "NormalRadioButtonEnum_True",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010104",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.NormalRadioButtonEnum",
                        Value = "False",
                        TranslationKey = "NormalRadioButtonEnum_False",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010105",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.AnotherNormalRadioButtonEnum",
                        Value = "False",
                        TranslationKey = "AnotherNormalRadioButtonEnum_False",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010106",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.AnotherNormalRadioButtonEnum",
                        Value = "True",
                        TranslationKey = "AnotherNormalRadioButtonEnum_True",
                        CollectionItemType = string.Empty
                    },
#endregion
#region Nested model data
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010201",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.NormalDropdownEnum",
                        Value = "Selected",
                        TranslationKey = "NormalDropdownEnum_Selected",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010202",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.NormalDropdownEnum",
                        Value = "None",
                        TranslationKey = "NormalDropdownEnum_None",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010203",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.NestedModel.Enums.NestedModelRadioButtonEnum",
                        Value = "True",
                        TranslationKey = "NestedModelRadioButtonEnum_True",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010204",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.NestedModel.Enums.NestedModelRadioButtonEnum",
                        Value = "False",
                        TranslationKey = "NestedModelRadioButtonEnum_False",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010205",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.NestedModel.Enums.NestedModelRadioButtonEnum",
                        Value = "True",
                        TranslationKey = "NestedModelRadioButtonEnum_True",
                        CollectionItemType = string.Empty
                    },
#endregion
#region Finding #1 data
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010301-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.TestFindingType",
                        Value = "TestFindingA",
                        TranslationKey = "TestFindingType_TestFindingA",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010302-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.NormalDropdownEnum",
                        Value = "Selected",
                        TranslationKey = "NormalDropdownEnum_Selected",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010303-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.NormalDropdownEnum",
                        Value = "Selected",
                        TranslationKey = "NormalDropdownEnum_Selected",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010304-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.FindingRadioButton",
                        Value = "True",
                        TranslationKey = "FindingRadioButton_True",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010305-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.FindingRadioButton",
                        Value = "False",
                        TranslationKey = "FindingRadioButton_False",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010308-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.FindingRadioButton",
                        Value = "False",
                        TranslationKey = "FindingRadioButton_False",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010309-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "True",
                        TranslationKey = "ComplexFindingRadioButton_True",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010310-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "False",
                        TranslationKey = "ComplexFindingRadioButton_False",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010311-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "False",
                        TranslationKey = "ComplexFindingRadioButton_False",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010312-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "False",
                        TranslationKey = "ComplexFindingRadioButton_False",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010317-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "False",
                        TranslationKey = "ComplexFindingRadioButton_False",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010318-F1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "True",
                        TranslationKey = "ComplexFindingRadioButton_True",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010401-F1-D1",
                        TypeName = "System.Boolean",
                        Value = true,
                        TranslationKey = "Boolean_True",
                        CollectionItemType = "1"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010402-F1-D1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.NestedFindingRadioButton",
                        Value = "True",
                        TranslationKey = "NestedFindingRadioButton_True",
                        CollectionItemType = "1"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010403-F1-D1",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.NestedFindingRadioButton",
                        Value = "False",
                        TranslationKey = "NestedFindingRadioButton_False",
                        CollectionItemType = "1"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010401-F1-D2",
                        TypeName = "System.Boolean",
                        Value = false,
                        TranslationKey = "Boolean_False",
                        CollectionItemType = "2"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010404-F1-D2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.NestedFindingRadioButton",
                        Value = "False",
                        TranslationKey = "NestedFindingRadioButton_False",
                        CollectionItemType = "2"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010403-F1-D2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.NestedFindingRadioButton",
                        Value = "True",
                        TranslationKey = "NestedFindingRadioButton_True",
                        CollectionItemType = "2"
                    },
#endregion
#region Finding #2 data
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010301-F2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.TestFindingType",
                        Value = "TestFindingB",
                        TranslationKey = "TestFindingType_TestFindingB",
                        CollectionItemType = "TestFindingB"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010303-F2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Enums.NormalDropdownEnum",
                        Value = "None",
                        TranslationKey = "NormalDropdownEnum_None",
                        CollectionItemType = "TestFindingB"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010306-F2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.FindingRadioButton",
                        Value = "False",
                        TranslationKey = "FindingRadioButton_False",
                        CollectionItemType = "TestFindingB"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010307-F2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.FindingRadioButton",
                        Value = "False",
                        TranslationKey = "FindingRadioButton_False",
                        CollectionItemType = "TestFindingB"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010308-F2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.FindingRadioButton",
                        Value = "True",
                        TranslationKey = "FindingRadioButton_True",
                        CollectionItemType = "TestFindingB"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010313-F2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "False",
                        TranslationKey = "ComplexFindingRadioButton_False",
                        CollectionItemType = "TestFindingB"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010314-F2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "True",
                        TranslationKey = "ComplexFindingRadioButton_True",
                        CollectionItemType = "TestFindingB"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010315-F2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "False",
                        TranslationKey = "ComplexFindingRadioButton_False",
                        CollectionItemType = "TestFindingB"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010316-F2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "False",
                        TranslationKey = "ComplexFindingRadioButton_False",
                        CollectionItemType = "TestFindingB"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010317-F2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "False",
                        TranslationKey = "ComplexFindingRadioButton_False",
                        CollectionItemType = "TestFindingB"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010318-F2",
                        TypeName = "RadioReport.Tests.Common.AttributesTests.TestModel.Finding.Enums.ComplexFindingRadioButton",
                        Value = "True",
                        TranslationKey = "ComplexFindingRadioButton_True",
                        CollectionItemType = "TestFindingB"
                    }
#endregion
                }
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}
