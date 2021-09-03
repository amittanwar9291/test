using System.Collections.Generic;
using System.Linq;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.Operators
{
    public abstract class ConditionOperatorBase
    {
        private const string EmptyValue = "NULL";
        protected string LeftValue { get; set; }
        protected string RightValue { get; set; }

        public ConditionOperatorBase(string leftValue, string rightValue = null)
        {
            LeftValue = GetValueToAssign(leftValue);
            RightValue = GetValueToAssign(rightValue);
        }

        public abstract override string ToString();

        protected static IEnumerable<string> SplitValues(string stringValue) =>
            stringValue?.Replace(" ", string.Empty, System.StringComparison.Ordinal)?.Split(',') ?? Enumerable.Empty<string>();
        
        private static string GetValueToAssign(string value)
        {
            if (value != null && value != EmptyValue)
            {
                return value;
            }
            return null;
        }
    }
}
