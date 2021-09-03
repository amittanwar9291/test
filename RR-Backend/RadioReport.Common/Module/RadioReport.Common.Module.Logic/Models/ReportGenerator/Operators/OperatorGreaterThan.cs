using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.Operators
{
    public class OperatorGreaterThan : ConditionOperatorBase, IConditionOperator
    {
        public OperatorGreaterThan(string leftValue, string rightValue)
            : base(leftValue, rightValue)
        {

        }

        public bool Evaluate()
        {
            if(decimal.TryParse(LeftValue.Replace(',', '.'), out var leftValue) && decimal.TryParse(RightValue.Replace(',', '.'), out var rightValue))
            {
                return leftValue > rightValue;
            }
            else
            {
                return false;
            }
        }

        public override string ToString()
        {
            return ">";
        }
    }
}
