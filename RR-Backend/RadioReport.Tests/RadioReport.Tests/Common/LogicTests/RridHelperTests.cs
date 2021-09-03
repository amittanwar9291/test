using RadioReport.Common.Helpers;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class RridHelperTests
    {
    
        [Theory]
        [InlineData("mam_m_012345", 1)]
        [InlineData("mam_mx_012345", 1)]
        [InlineData("mam_mx_112345", 11)]
        [InlineData("mam_m_012345-2", 1)]
        [InlineData("mam_m_0123456_2", 1)]
        [InlineData("uni_ys_035678", 3)]
        [InlineData("fra_070103-23", 7)]
        [InlineData("uni_01_456", 1)]
        [InlineData("uni_01_456_78", 1)]
        [InlineData("Patient_FirstName", null)]
        [InlineData("mam_01_234", 1)]
        [InlineData("simple_test", null)]
        public void RadioReportIdRegexInConditionTest(string rrid, int? expectedResult)
        {
            // Arrange
            // Act
            var result = RridHelper.GetPageNumberFromRrid(rrid);

            // Assert
            Assert.Equal(expectedResult, result);
        }
    }
}
