using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.Operators
{
    public class OperatorNotEmpty : ConditionOperatorBase, IConditionOperator
    {
        public OperatorNotEmpty(string leftValue)
            : base(leftValue)
        {

        }

        public bool Evaluate()
        {
            return !string.IsNullOrEmpty(LeftValue);
        }

        public bool AcceptsNull => true;

        public override string ToString()
        {
            return "NOT_EMPTY";
        }
    }
}
