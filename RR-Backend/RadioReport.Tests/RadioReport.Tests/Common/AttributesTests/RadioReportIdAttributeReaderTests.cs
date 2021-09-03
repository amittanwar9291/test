using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Tests.Common.AttributesTests.TestModel;
using Xunit;

namespace RadioReport.Tests.Common.AttributesTests
{
    public class RadioReportIdAttributeReaderTests
    {
        [Theory]
        [ClassData(typeof(RadioReportIdAttributeReaderTestsData))]
        public void ReaderShouldReturnCorrectValues(TestPage model, List<RadioReportValue> expectedValues)
        {
            // Arrange
            var settings = new JsonSerializerSettings();
            settings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
            expectedValues = expectedValues.OrderBy(v => v.RadioReportId).ToList();
            var expected = JsonConvert.SerializeObject(expectedValues, settings);

            // Act
            var actualValues = RadioReportIdAttributeReader.GetValuesFromAllProperties(model);
            actualValues = actualValues.OrderBy(v => v.RadioReportId);
            var actual = JsonConvert.SerializeObject(actualValues, settings);

            // Assert
            Assert.Equal(expected, actual);
        }
    }
}
