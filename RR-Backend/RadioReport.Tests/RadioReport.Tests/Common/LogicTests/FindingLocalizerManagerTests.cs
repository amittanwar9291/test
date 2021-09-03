using System.Threading.Tasks;
using Moq;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Tests.Common.TestData;
using Xunit;
using Buckets = RadioReport.Common.Consts.MinIO.Buckets;


namespace RadioReport.Tests.Common.LogicTests
{
    public class FindingLocalizerManagerTests
    {
        [Theory]
        [ClassData(typeof(FindingLocalizerManagerTestData))]
        public async Task ShouldReturnByCode(
            string code,
            bool localizersBackground,
            FindingLocalizer existingLocalizer,
            FindingLocalizer expectedResult,
            string expectedURI,
            byte[] existingBackground)
        {
            // Arrange
            var repositoryMock = new Mock<IFindingLocalizerRepository>();
            var minIOServiceMock = new Mock<IMinIOService>();
            var translationsMock = new Mock<IReportTranslationManager>();

            repositoryMock
                .Setup(r => r.GetLocalizerByCode(It.Is<string>(a => a == code)))
                .ReturnsAsync(existingLocalizer)
                .Verifiable();

            translationsMock
                .Setup(t => t.GetValueTranslation(It.IsAny<RadioReportValue>(), It.IsAny<string>()))
                .Returns((RadioReportValue radioReportValue, string languageCode) => radioReportValue.Value.ToString())
                .Verifiable();

            if (localizersBackground)
            {
                minIOServiceMock
                    .Setup(m => m.GetBinaryObjectAsync(It.Is<string>(b => b == Buckets.StaticFiles), It.Is<string>(o => o == expectedURI), default))
                    .ReturnsAsync(existingBackground)
                    .Verifiable();
            }

            var manager = new FindingLocalizerManager(repositoryMock.Object, minIOServiceMock.Object, translationsMock.Object, null, null, new HttpAuthContext());

            // Act
            var actualResult = await manager.GetByCode(code, localizersBackground);

            // Assert
            Assert.Equal(expectedResult.AsJson(), actualResult.AsJson());
            repositoryMock.Verify();
            minIOServiceMock.Verify();
        }
    }
}
