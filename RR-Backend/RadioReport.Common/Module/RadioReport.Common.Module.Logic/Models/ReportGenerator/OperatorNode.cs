using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class OperatorNode : Node
    {
        public Node LeftOperand { get; }
        public Node RightOperand { get; }
        public IBooleanOperator BooleanOperator { get; }

        public OperatorNode(string identifier, Node leftOperand, Node rightOperand, IBooleanOperator booleanOperator)
            : base(identifier)
        {
            LeftOperand = leftOperand;
            RightOperand = rightOperand;
            BooleanOperator = booleanOperator;
        }

        public bool Evaluate(bool left, bool right) => BooleanOperator.Evaluate(left, right);

        public override string ToString() => BooleanOperator.ToString();
    }
}
