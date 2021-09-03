using RadioReport.Common.Module.Logic.Models.ReportGenerator.Operators;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class OperatorsTests
    {
        [Theory]
        [InlineData("true", "true", true)]
        [InlineData("false", "false", true)]
        [InlineData("true", "false", false)]
        [InlineData("1", "1", true)]
        [InlineData("1", "2", false)]
        public void EqualsOperatorTest(string leftValue, string rightValue, bool expectedResult)
        {
            // Arrange
            var equalsOperator = new OperatorEquals(leftValue, rightValue);

            // Act
            var actualResult = equalsOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("true", "true", false)]
        [InlineData("false", "false", false)]
        [InlineData("true", "false", true)]
        [InlineData("1", "1", false)]
        [InlineData("1", "2", true)]
        public void NotEqualsOperatorTest(string leftValue, string rightValue, bool expectedResult)
        {
            // Arrange
            var notEqualsOperator = new OperatorNotEquals(leftValue, rightValue);

            // Act
            var actualResult = notEqualsOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("2", "1", true)]
        [InlineData("1", "2", false)]
        [InlineData("1", "1", false)]
        [InlineData("test", "test", false)]
        public void GreaterThanOperatorTest(string leftValue, string rightValue, bool expectedResult)
        {
            // Arrange
            var greaterThanOperator = new OperatorGreaterThan(leftValue, rightValue);

            // Act
            var actualResult = greaterThanOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("2", "1", true)]
        [InlineData("1", "2", false)]
        [InlineData("1", "1", true)]
        [InlineData("test", "test", false)]
        public void GreaterEqOperatorTest(string leftValue, string rightValue, bool expectedResult)
        {
            // Arrange
            var greaterEqOperator = new OperatorGreaterEq(leftValue, rightValue);

            // Act
            var actualResult = greaterEqOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("2", "1", false)]
        [InlineData("1", "2", true)]
        [InlineData("1", "1", false)]
        [InlineData("test", "test", false)]
        public void SmallerThanOperatorTest(string leftValue, string rightValue, bool expectedResult)
        {
            // Arrange
            var smallerThanOperator = new OperatorSmallerThan(leftValue, rightValue);

            // Act
            var actualResult = smallerThanOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("2", "1", false)]
        [InlineData("1", "2", true)]
        [InlineData("1", "1", true)]
        [InlineData("test", "test", false)]
        public void SmallerEqOperatorTest(string leftValue, string rightValue, bool expectedResult)
        {
            // Arrange
            var smallerEqOperator = new OperatorSmallerEq(leftValue, rightValue);

            // Act
            var actualResult = smallerEqOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("1", "1,2,3", true)]
        [InlineData("4", "1, 2, 3", false)]
        [InlineData("test", "test, test2", true)]
        [InlineData("test1, test3", "test1, test2, test3", true)]
        [InlineData("st1, te", "test1, test2, test3", false)]
        [InlineData("test", "test1, test2", false)]
        [InlineData("test1, test2, test3", "test1, test3", true)]
        [InlineData("test1, test2, test3", "test4, test5", false)]
        public void InOperatorTest(string leftValue, string rightValue, bool expectedResult)
        {
            // Arrange
            var inOperator = new OperatorIn(leftValue, rightValue);

            // Act
            var actualResult = inOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("1", "1, 2, 3", false)]
        [InlineData("4", "1, 2, 3", true)]
        [InlineData("test", "test, test2", false)]
        [InlineData("test", "test1, test2", true)]
        public void NotInOperatorTest(string leftValue, string rightValue, bool expectedResult)
        {
            // Arrange
            var notInOperator = new OperatorNotIn(leftValue, rightValue);

            // Act
            var actualResult = notInOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("test,one,test", "one", true)]
        [InlineData("test", "one", false)]
        [InlineData("one", "one ", true)]
        [InlineData("one ", "one ", true)]
        [InlineData("one ", " one ", true)]
        [InlineData("one ", "one", true)]
        [InlineData("", "test", false)]
        public void ContainsOperatorTest(string leftValue, string rightValue, bool expectedResult)
        {
            // Arrange
            var containsOperator = new OperatorContains(leftValue, rightValue);

            // Act
            var actualResult = containsOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("1", "1, 2, 3", false)]
        [InlineData("1, 2, 3", "1", true)]
        [InlineData("1, 2, 3", "1, 2, 3", true)]
        [InlineData("1, 2, 3, 4", "1, 2, 3", true)]
        [InlineData("3, 2, 1", "1, 2, 3", true)]
        [InlineData("3, 1, 2", "1, 2, 2, 3", true)]
        [InlineData("test, test2", "test, test2", true)]
        [InlineData("test", "test1, test2", false)]
        public void AllOperatorTest(string leftValue, string rightValue, bool expectedResult)
        {
            // Arrange
            var allOperator = new OperatorAll(leftValue, rightValue);

            // Act
            var actualResult = allOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("true", false)]
        [InlineData("", true)]
        [InlineData(null, true)]
        public void EmptyOperatorTest(string leftValue, bool expectedResult)
        {
            // Arrange
            var emptyOperator = new OperatorEmpty(leftValue);

            // Act
            var actualResult = emptyOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("true", true)]
        [InlineData("", false)]
        [InlineData(null, false)]
        public void NotEmptyOperatorTest(string leftValue, bool expectedResult)
        {
            // Arrange
            var notEmptyOperator = new OperatorNotEmpty(leftValue);

            // Act
            var actualResult = notEmptyOperator.Evaluate();

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }
    }
}
