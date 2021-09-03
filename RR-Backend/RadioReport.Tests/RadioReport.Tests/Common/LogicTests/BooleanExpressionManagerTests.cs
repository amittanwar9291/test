using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class BooleanExpressionManagerTests
    {
        [Theory]
        [InlineData("", true)]
        [InlineData(null, true)]
        [InlineData("3;equals;2", false)]
        [InlineData("NULL;>;2", false)]
        [InlineData("test;contains;NULL", false)]
        [InlineData("true;=;true|3;!equals;2|AND|4;in;3,4,5|left,right;contains;right|AND|AND", true)]
        public void EvaluateExpressionTest(string postFixExpression, bool expectedResult)
        {
            // Arrange
            var booleanExpressionManager = new BooleanExpressionManager();

            // Act
            var actualResult = booleanExpressionManager.EvaluateExpression(postFixExpression);

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }
    }
}
