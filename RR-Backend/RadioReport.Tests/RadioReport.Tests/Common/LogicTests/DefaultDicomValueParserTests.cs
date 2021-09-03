using System;
using FakeItEasy;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Services;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class DefaultDicomValueParserTests
    {
        private readonly DefaultDicomValueParser _classUnderTest;

        public DefaultDicomValueParserTests()
        {
            var fakeLogger = A.Fake<ILogger<DefaultDicomValueParser>>();
            _classUnderTest = new DefaultDicomValueParser(fakeLogger);
        }

        [Fact]
        public void ParseStringifiedEnum_ParsableInput_ParsedToEnumOfType()
        {
            // Arrange
            var enumType = typeof(OrientationType);
            var importValue = new ImportValueDto { Value = OrientationType.Paracoronal.ToString(), ImportValueIdentifier = "id" };

            // Act
            var result = _classUnderTest.ParseStringifiedEnum(StringImportValue.Create(importValue).Value, enumType);

            // Assert
            Assert.IsType<OrientationType>(result);
            Assert.Equal(OrientationType.Paracoronal, result);
        }

        [Fact]
        public void ParseStringifiedEnum_NonParsableInput_NullReturned()
        {
            // Arrange
            var enumType = typeof(OrientationType);
            var importValue = new ImportValueDto { Value = "not parsable", ImportValueIdentifier = "id" };

            // Act
            var result = _classUnderTest.ParseStringifiedEnum(StringImportValue.Create(importValue).Value, enumType);

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public void ParseDate_ParsableInput_ParsedToDate()
        {
            // Arrange
            var importValue = new ImportValueDto { Value = "20100623", ImportValueIdentifier = "id" };
            var expectedResult = new DateTime(2010, 6, 23);

            // Act
            var result = _classUnderTest.ParseDate(StringImportValue.Create(importValue).Value);

            // Assert
            Assert.Equal(expectedResult, result);
        }

        [Fact]
        public void ParseDate_NonParsableInput_DefaultReturned()
        {
            // Arrange
            var importValue = new ImportValueDto { Value = "string", ImportValueIdentifier = "id" };
            var expectedResult = DateTime.MinValue;

            // Act
            var result = _classUnderTest.ParseDate(StringImportValue.Create(importValue).Value);

            // Assert
            Assert.Equal(expectedResult, result);
        }

        [Fact]
        public void ParseStringifiedBoolean_ParsableInput_ParsedToBoolean()
        {
            // Arrange
            var importValue1 = new ImportValueDto { Value = "True", ImportValueIdentifier = "id" };
            var importValue2 = new ImportValueDto { Value = "false", ImportValueIdentifier = "id" };

            // Act
            var result1 = _classUnderTest.ParseStringifiedBoolean(StringImportValue.Create(importValue1).Value);
            var result2 = _classUnderTest.ParseStringifiedBoolean(StringImportValue.Create(importValue2).Value);

            // Assert
            Assert.True(result1);
            Assert.False(result2);
        }

        [Fact]
        public void ParseStringifiedBoolean_NonParsableInput_DefaultReturned()
        {
            // Arrange
            var importValue = new ImportValueDto { Value = "string", ImportValueIdentifier = "id" };

            // Act
            var result = _classUnderTest.ParseStringifiedBoolean(StringImportValue.Create(importValue).Value);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void ParseInt_ParsableInput_ParsedToInt()
        {
            // Arrange
            var importValue = new ImportValueDto { Value = "20", ImportValueIdentifier = "id" };

            // Act
            var result = _classUnderTest.ParseInt(StringImportValue.Create(importValue).Value);

            // Assert
            Assert.Equal(20, result);
        }

        [Fact]
        public void ParseInt_NonParsableInput_DefaultReturned()
        {
            // Arrange
            var importValue = new ImportValueDto { Value = "string", ImportValueIdentifier = "id" };

            // Act
            var result = _classUnderTest.ParseInt(StringImportValue.Create(importValue).Value);

            // Assert
            Assert.Equal(0, result);
        }

        [Theory]
        [InlineData("845D", 2)]
        [InlineData("738W", 14)]
        [InlineData("587M", 48)]
        [InlineData("031Y", 31)]
        [InlineData("024y", 24)]
        [InlineData("  024y ", 24)]
        public void ParseAgeString_ParsableInput_ParsedToAge(string value, byte expected)
        {
            // Arrange
            var importValue = new ImportValueDto { Value = value, ImportValueIdentifier = "id" };

            // Act
            var result = _classUnderTest.ParseAgeString(StringImportValue.Create(importValue).Value);

            // Assert
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("24y")]
        [InlineData("324")]
        [InlineData("3247D")]
        [InlineData("l324Y")]
        [InlineData("324Dy")]
        public void ParseAgeString_NonParsableInput_DefaultReturned(string value)
        {
            // Arrange
            var importValue = new ImportValueDto { Value = value, ImportValueIdentifier = "id" };

            // Act
            var result = _classUnderTest.ParseAgeString(StringImportValue.Create(importValue).Value);

            // Assert
            Assert.Equal(0, result);
        }
    }
}
