using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.BooleanOperators
{
    public class BooleanOperatorAnd : IBooleanOperator
    {
        public bool Evaluate(bool lValue, bool rValue)
        {
            return lValue && rValue;
        }

        public override string ToString()
        {
            return "AND";
        }
    }
}
