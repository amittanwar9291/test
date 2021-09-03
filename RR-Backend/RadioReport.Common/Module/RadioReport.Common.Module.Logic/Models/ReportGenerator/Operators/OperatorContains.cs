using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using System;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.Operators
{
    public class OperatorContains : ConditionOperatorBase, IConditionOperator
    {
        public OperatorContains(string leftValue, string rightValue)
            : base(leftValue, rightValue)
        {

        }

        public bool Evaluate()
        {
            return LeftValue.Contains(RightValue.Trim(), StringComparison.OrdinalIgnoreCase);
        }

        public override string ToString()
        {
            return "CONTAINS";
        }
    }
}
