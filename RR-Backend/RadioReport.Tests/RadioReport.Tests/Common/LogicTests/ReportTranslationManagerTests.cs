using System;
using Microsoft.Extensions.Localization;
using Moq;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Tests.Common.TestData;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class ReportTranslationManagerTests
    {
        [Theory]
        [ClassData(typeof(ReportTranslationManagerTestData))]
        public void GetValueTranslationTest(RadioReportValue inputValue, string expectedValue)
        {
            // Arrange
            if (inputValue is null)
            {
                throw new ArgumentNullException(nameof(inputValue));
            }

            var stringLocalizerMock = new Mock<IStringLocalizer>();
            var key = inputValue.TypeName + "_" + inputValue.Value;
            stringLocalizerMock
                .Setup(_ => _[key])
                .Returns(new LocalizedString(key, expectedValue))
                .Verifiable();

            var stringLocalizerFactoryMock = new Mock<IStringLocalizerFactory>();
            stringLocalizerFactoryMock
                .Setup(sf => sf.Create(It.IsAny<Type>()))
                .Returns(stringLocalizerMock.Object)
                .Verifiable();

            var manager = new ReportTranslationManager(stringLocalizerFactoryMock.Object);

            // Act
            var actualResult = manager.GetValueTranslation(inputValue, "en");

            // Assert
            Assert.Equal(expectedValue, actualResult);
            if(!string.IsNullOrEmpty(expectedValue))
            {
                stringLocalizerMock.Verify();
                stringLocalizerFactoryMock.Verify();
            }
        }
    }
}
