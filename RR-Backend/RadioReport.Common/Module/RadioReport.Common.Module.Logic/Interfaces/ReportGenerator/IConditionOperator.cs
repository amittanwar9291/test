namespace RadioReport.Common.Module.Logic.Interfaces.ReportGenerator
{
    public interface IConditionOperator
    {
        bool Evaluate();

        bool AcceptsNull => false;
    }
}
