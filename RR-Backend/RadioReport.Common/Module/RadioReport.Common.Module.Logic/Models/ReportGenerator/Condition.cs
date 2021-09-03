using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class Condition
    {
        public string LeftValue { get; }
        public string RightValue { get; }
        public IConditionOperator Operator { get; }

        public Condition(string lValue, string rValue, IConditionOperator conditionOperator)
        {
            LeftValue = lValue;
            RightValue = rValue;
            Operator = conditionOperator;
        }

        public bool Evaluate()
        {
            if (!Operator.AcceptsNull && (LeftValue == "NULL" || RightValue == "NULL"))
            {
                return false;
            }
            return Operator.Evaluate();
        }

        public override string ToString() => $"{LeftValue};{Operator};{RightValue}";

    }
}
