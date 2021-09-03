using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Generators.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Tests.Common.TestData;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class HtmlGeneratorTests
    {
        [Theory]
        [ClassData(typeof(HtmlGeneratorTestData))]
        public async Task GenerateDocumentFromReportTest(ReportSchema report, ReportResult reportSettings, string expectedResult)
        {
            // Arrange
            var generator = new HtmlGenerator();

            // Act
            var actualResult = await generator.GenerateDocumentFromReport(report, reportSettings, "en-GB");

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }
    }
}
