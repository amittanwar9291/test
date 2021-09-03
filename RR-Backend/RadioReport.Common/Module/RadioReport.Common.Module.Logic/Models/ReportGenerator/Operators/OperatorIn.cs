using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using System.Linq;
using System;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.Operators
{
    public class OperatorIn : ConditionOperatorBase, IConditionOperator
    {
        public OperatorIn(string leftValue, string rightValue)
            : base(leftValue, rightValue)
        {

        }

        public bool Evaluate()
        {
            var rightValues = SplitValues(RightValue);
            var leftValues = SplitValues(LeftValue);

            return leftValues.Any(v => rightValues.Contains(v, StringComparer.OrdinalIgnoreCase));
        }

        public override string ToString()
        {
            return "IN";
        } 
    }
}
