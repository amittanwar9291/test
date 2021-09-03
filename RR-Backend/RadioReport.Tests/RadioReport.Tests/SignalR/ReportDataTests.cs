using System;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models;
using Xunit;

namespace RadioReport.Tests.SignalR
{
    public class ReportDataTests
    {
        [Fact]
        public void Create_ValidInput_SuccessReturned()
        {
            // Arrange
            const string reportIdString = "AB12ED2E-0D5C-4FF2-B246-5F99DC0D166C";
            const string moduleString = "KneeMRT";

            // Act
            var data = ReportData.Create(reportIdString, moduleString);

            // Assert
            Assert.True(data.IsSuccess);
            Assert.Equal(Guid.Parse(reportIdString), data.Value.ReportId);
            Assert.Equal(ModuleType.KneeMRT, data.Value.ModuleType);
        }

        [Theory]
        [InlineData(null, "any")]
        [InlineData("", "any")]
        [InlineData("nonguid", "any")]
        [InlineData("AB12ED2E-0D5C-4FF2-B246-5F99DC0D166C", null)]
        [InlineData("AB12ED2E-0D5C-4FF2-B246-5F99DC0D166C", "")]
        [InlineData("AB12ED2E-0D5C-4FF2-B246-5F99DC0D166C", "nonmodule")]
        public void Create_InValidInput_FailReturned(string reportIdString, string moduleString)
        {
            // Act
            var data = ReportData.Create(reportIdString, moduleString);

            // Assert
            Assert.True(data.IsFailure);
        }
    }
}
