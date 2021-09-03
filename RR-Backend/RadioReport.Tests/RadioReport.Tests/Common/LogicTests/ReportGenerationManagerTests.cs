using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Moq;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Generators.ReportGenerator;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Tests.Common.TestData;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class ReportGenerationManagerTests
    {
        /// <summary>
        /// Integration test. 
        /// Checks correctness of ReportGenerationManager and dependent components: BooleanExpressionManager
        /// and HtmlGenerator. Additionally some other dependent component behaviours are mocked. 
        /// Settings for those components are passed in parameters and should co-operate with each other. 
        /// </summary>
        /// <param name="reportSchema">Mock of report schema. 
        /// If lines contain text with rrid or localizer id included in parameters "radioReportValues" or "localizers" 
        /// it will be substituted with value from the provided dictionary. </param>
        /// <param name="languageCode">Mock language code - doesn't have any impact on the result</param>
        /// <param name="radioReportValues">List of RadioReportValue objects. 
        /// Values from the list will be substituted in report schema based on RadioReportId. 
        /// CollectionItemType will be used to remove lines from report schema that do not match the given type. (only for findings)</param>
        /// <param name="localizers">List of FindingLocalizer objects. It is used to mock the behavior of findingLocalzier service.
        /// It should contain only localizers that are used in report schema and are expected on output.
        /// IMPORTANT! If this list contains any values localizer ids will be substituted in report schema 
        /// with svgs stored in Content property. 
        /// If this list is empty localizer ids will be substituted in report schema with text values taken from "radioReportValues" dictionary.</param>
        /// <param name="expectedReportHtml">Expected report html content. 
        /// The content should include substitued values and localizer svgs if they are present in report schema and parameters "radioReportValues" and "localizers".</param>
        /// <returns></returns>
        [Theory]
        [ClassData(typeof(ReportGenerationManagerTestData))]
        public async Task GenerateReportTest(ReportSchema reportSchema, ReportResult result, string languageCode,
            IEnumerable<RadioReportValue> radioReportValues, IEnumerable<FindingLocalizer> localizers,
            string expectedReportHtml)
        {
            // Arrange
            if (reportSchema is null)
            {
                throw new ArgumentNullException(nameof(reportSchema));
            }
            var minIOServiceMock = new Mock<IMinIOService>();
            var repositoryMock = new Mock<IReportSchemaRepository>();
            repositoryMock
                .Setup(r => r.GetByReportTypeNameAsync(It.Is<string>(n => n == reportSchema.ReportTypeName)))
                .ReturnsAsync(reportSchema)
                .Verifiable();
            var booleanExpressionManager = new BooleanExpressionManager();
            var translationManagerMock = new Mock<IReportTranslationManager>();
            translationManagerMock
                .Setup(t => t.GetValueTranslation(It.IsAny<RadioReportValue>(), It.IsAny<string>()))
                .Returns((RadioReportValue radioReportValue, string languageCode) => radioReportValue.Value.ToString())
                .Verifiable();
            var findingLocalizerRepoMock = new Mock<IFindingLocalizerRepository>();
            if (localizers.Any())
            {
                findingLocalizerRepoMock.Setup(f => f.GetLocalizerByCode(It.IsAny<string>()))
                    .ReturnsAsync((string code) => localizers.First(l => l.Code == code))
                    .Verifiable();
            }

            var findingLocalizerManager = new FindingLocalizerManager(findingLocalizerRepoMock.Object, minIOServiceMock.Object, translationManagerMock.Object, null,
                null, new HttpAuthContext());

            var generationManager = new TestReportGenerationManager(repositoryMock.Object, translationManagerMock.Object,
                booleanExpressionManager, findingLocalizerManager, new HtmlGenerator());
            // Act
            await generationManager.GenerateAndAppendTextReport(result, languageCode, localizers.Any() ? LocalizerType.Svg : LocalizerType.None, 
                false, radioReportValues);

            // Assert
            Assert.Equal(expectedReportHtml, result.ReportHtml);
            repositoryMock.Verify();
            translationManagerMock.Verify();
            findingLocalizerRepoMock.Verify();
        }
    }
}
