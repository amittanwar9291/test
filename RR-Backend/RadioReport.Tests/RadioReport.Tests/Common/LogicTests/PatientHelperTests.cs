using System;
using RadioReport.Common.Helpers;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class PatientHelperTests
    {
        [Fact]
        public void CalculateAge_AgeCalculatedCorrectly()
        {
            // Arrange
            var birthDate = new DateTime(1980, 10, 15);
            var young = new DateTime(1995, 9, 11);
            var oneDayBeforeBirthday = new DateTime(2020, 10, 14);
            var dayOfBirthday = new DateTime(2020, 10, 15);
            var oneDayAfterBirthday = new DateTime(2020, 10, 16);
            var old = new DateTime(2050, 11, 11);

            // Act
            var youngActual = PatientHelper.CalculateAge(birthDate, young);
            var oneDayBeforeBirthdayActual = PatientHelper.CalculateAge(birthDate, oneDayBeforeBirthday);
            var dayOfBirthdayActual = PatientHelper.CalculateAge(birthDate, dayOfBirthday);
            var oneDayAfterBirthdayActual = PatientHelper.CalculateAge(birthDate, oneDayAfterBirthday);
            var oldActual = PatientHelper.CalculateAge(birthDate, old);

            // Assert
            Assert.Equal(39, oneDayBeforeBirthdayActual);
            Assert.Equal(40, dayOfBirthdayActual);
            Assert.Equal(40, oneDayAfterBirthdayActual);
            Assert.Equal(14, youngActual);
            Assert.Equal(70, oldActual);
        }
    }
}
