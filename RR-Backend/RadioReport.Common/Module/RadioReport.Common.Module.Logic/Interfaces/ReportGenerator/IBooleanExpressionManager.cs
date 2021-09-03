namespace RadioReport.Common.Module.Logic.Interfaces.ReportGenerator
{
    public interface IBooleanExpressionManager
    {
        bool EvaluateExpression (string expressionInPostfix, bool ignoreRating = false);
    }
}
