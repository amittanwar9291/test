using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using System;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.Operators
{
    public class OperatorNotEquals : ConditionOperatorBase, IConditionOperator
    {
        public OperatorNotEquals(string leftValue, string rightValue)
            : base(leftValue, rightValue)
        {

        }

        public bool Evaluate()
        {
            if (decimal.TryParse(LeftValue.Replace(',', '.'), out var leftValue) && decimal.TryParse(RightValue.Replace(',', '.'), out var rightValue))
            {
                return leftValue != rightValue;
            }
            else
            {
                return !LeftValue.Equals(RightValue, StringComparison.OrdinalIgnoreCase);
            }
        }

        public override string ToString()
        {
            return "<>";
        }
    }
}
