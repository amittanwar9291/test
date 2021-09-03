namespace RadioReport.Common.Module.Logic.Interfaces.ReportGenerator
{
    public interface IBooleanOperator
    {
        bool Evaluate(bool lValue, bool rValue);
    }
}
