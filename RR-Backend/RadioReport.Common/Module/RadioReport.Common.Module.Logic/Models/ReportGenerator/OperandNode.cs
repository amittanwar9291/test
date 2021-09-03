using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class OperandNode : Node
    {
        // condition template -> rr-id + operator (=, <>, IN, NOT IN, CONTAINS) + value(s) (preferably a string array)
        public bool Value { get => Condition.Evaluate(); }

        public Condition Condition { get; }

        public OperandNode(string identifier, string leftValue, string rightValue, IConditionOperator conditionOperator) : base(identifier)
        {
            Condition = new Condition(leftValue, rightValue, conditionOperator);
        }

        public override string ToString()
        {
            return Condition.ToString();
        }
    }
}
