using System;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Core.SignalR.Domain.Models;
using Xunit;

namespace RadioReport.Tests.SignalR
{
    public class ReportSessionIdentifierTests
    {
        [Fact]
        public void CreateNew_ValidInput_CreatedProperly()
        {
            // Arrange
            const string expectedReportId = "8F228FE7-193C-40BF-95AA-EBE1252DE184";
            const string expectedModule = "KneeMRT";
            var reportData = ReportData.Create(expectedReportId, expectedModule);

            // Act
            var identifier = new ReportSessionIdentifier(reportData.Value);

            // Assert
            Assert.StartsWith(Guid.Parse(expectedReportId).ToString(), identifier.Value);
            Assert.EndsWith(expectedModule, identifier.Value);
        }

        [Fact]
        public void Parse_ValidInput_SuccessReturned()
        {
            // Arrange
            const string cacheKey = "8F228FE7-193C-40BF-95AA-EBE1252DE184_KneeMRT";
            var expectedReportId = Guid.Parse("8F228FE7-193C-40BF-95AA-EBE1252DE184");
            const ModuleType expectedModuleType = ModuleType.KneeMRT;

            // Act
            var result = ReportSessionIdentifier.Parse(cacheKey);

            // Assert
            Assert.True(result.IsSuccess);
            Assert.Equal(expectedReportId, result.Value.ReportId);
            Assert.Equal(expectedModuleType, result.Value.ModuleType);
        }

        [Theory]
        [InlineData("any_any_any")]
        [InlineData("any")]
        [InlineData("")]
        public void Parse_InValidInput_FailReturned(string cacheKey)
        {
            // Act
            var result = ReportSessionIdentifier.Parse(cacheKey);

            // Assert
            Assert.True(result.IsFailure);
        }
    }
}
