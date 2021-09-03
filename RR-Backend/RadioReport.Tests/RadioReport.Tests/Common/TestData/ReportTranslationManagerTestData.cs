using System.Collections;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Tests.Common.TestData
{
    public class ReportTranslationManagerTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[]
            {
                new RadioReportValue { },
                string.Empty
            },
            new object[]
            {
                new RadioReportValue { RadioReportId = "tho_c_123123", TypeName = "Pest", Value = "Test", TranslationKey = "Pest_Test" },
                "returned value"
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}
