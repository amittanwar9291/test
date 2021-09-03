using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using System.Linq;
using System;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.Operators
{
    public class OperatorAll : ConditionOperatorBase, IConditionOperator
    {
        public OperatorAll(string leftValue, string rightValue)
            : base(leftValue, rightValue)
        {

        }

        public bool Evaluate()
        {
            var rightValues = SplitValues(RightValue);
            var leftValues = SplitValues(LeftValue);
            return rightValues.All(rv => leftValues.Contains(rv, StringComparer.OrdinalIgnoreCase));
        }

        public override string ToString()
        {
            return "ALL";
        }
    }
}
