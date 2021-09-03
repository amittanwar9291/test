using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.Operators
{
    public class OperatorEmpty : ConditionOperatorBase, IConditionOperator
    {
        public OperatorEmpty(string leftValue)
            : base(leftValue)
        {

        }

        public bool Evaluate()
        {
            return string.IsNullOrEmpty(LeftValue);
        }

        public bool AcceptsNull => true;

        public override string ToString()
        {
            return "EMPTY";
        }
    }
}
