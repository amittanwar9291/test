using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.BooleanOperators;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Operators;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Module.Logic.Consts;
using System;

namespace RadioReport.Common.Module.Logic.Managers.ReportGenerator
{
    public class BooleanExpressionManager : IBooleanExpressionManager
    {
        
        private readonly string[] _booleanOperators = { ReportConsts.AndOperator, ReportConsts.OrOperator };

        public bool EvaluateExpression(string expressionInPostfix, bool ignoreRating = false)
        {         
            if (string.IsNullOrEmpty(expressionInPostfix) )
            {
                return true;
            }

            if (ignoreRating && expressionInPostfix.Contains(ReportConsts.ReportRatingKey, StringComparison.Ordinal))
            {
                return true;
            }

            var tree = PostfixToTree(expressionInPostfix);
            if (tree != null)
            {
                var result = InOrderTraversal(tree);
                return result;
            }
            return true;
        }

        private Node PostfixToTree(string postfix)
        {
            var stack = new Stack<Node>();
            var expressions = postfix.Split(ReportConsts.ExpressionSep);
            foreach (var expr in expressions)
            {
                var expressionParts = expr.Split(ReportConsts.ConditionCommentSep, 3);
                var comment = expressionParts.Length > 1 ? expressionParts[1] : string.Empty;
                
                if (!IsOperator(expressionParts[0]))
                {
                    var operandParts = expressionParts[0].Split(ReportConsts.OperandSep);
                    if (operandParts.Length != 3)
                    {
                        throw new ReportGenerationFailureException("An operand is not correctly defined.");
                    }

                    if (!comment.Contains(ReportConsts.CommentSymbol, System.StringComparison.Ordinal))
                    {
                        IConditionOperator conditionOperator = ParseStringToConditionOperator(operandParts[1], operandParts[0], operandParts[2]);
                        stack.Push(new OperandNode(expressionParts[0], operandParts[0], operandParts[2], conditionOperator));
                    }
                    else
                    {
                        stack.Push(null);
                    }
                }
                else
                {
                    IBooleanOperator booleanOperator = ParseStringToBooleanOperator(expressionParts[0]);
                    Node right = stack.Count > 0 ? stack.Pop() : null;
                    Node left = stack.Count > 0 ? stack.Pop() : null;

                    if (!comment.Contains(ReportConsts.CommentSymbol, System.StringComparison.Ordinal)
                        && (right != null || left != null))
                    {
                        stack.Push(new OperatorNode(expressionParts[0], left, right, booleanOperator));
                    }
                    else
                    {
                        stack.Push(null);
                    }
                }
            }

            return stack.Pop();
        }

        private static bool InOrderTraversal(Node node) =>
            node switch
            {
                null => false,
                OperatorNode operatorNode => EvaluateOperatorNode(operatorNode)
                    ,
                OperandNode operandNode => operandNode.Value,
                _ => false
            };

        private static bool EvaluateOperatorNode(OperatorNode operatorNode)
        {
            if (operatorNode.LeftOperand is null && operatorNode.RightOperand is null)
            {
                return true;
            }

            var booleanPlaceholder = operatorNode.BooleanOperator is BooleanOperatorAnd;

            if (operatorNode.LeftOperand is null)
            {
                return operatorNode.Evaluate(
                        booleanPlaceholder,
                        InOrderTraversal(operatorNode.RightOperand));
            }

            if (operatorNode.RightOperand is null)
            {
                return operatorNode.Evaluate(
                     InOrderTraversal(operatorNode.LeftOperand),
                        booleanPlaceholder);
            }

            return operatorNode.Evaluate(
                        InOrderTraversal(operatorNode.LeftOperand),
                        InOrderTraversal(operatorNode.RightOperand));
        }
        
        private bool IsOperator(string identifier)
        {
            return _booleanOperators.Contains(identifier);
        }

        private static IBooleanOperator ParseStringToBooleanOperator(string op) =>
            op switch
            {
                ReportConsts.OrOperator => new BooleanOperatorOr(),
                ReportConsts.AndOperator => new BooleanOperatorAnd(),
                _ => throw new ReportGenerationFailureException("Operator not implemented.")
            };

        private static IConditionOperator ParseStringToConditionOperator(string str, string leftValue, string rightValue)
        {
            var culture = new CultureInfo("en-GB");
            switch (str.Trim().ToLower(culture))
            {
                case "=":
                case "==":
                case "equals":
                case "eq":
                    return new OperatorEquals(leftValue, rightValue);

                case "<>":
                case "!=":
                case "not_equals":
                case "not equals":
                case "!equals":
                case "neq":
                    return new OperatorNotEquals(leftValue, rightValue);

                case ">":
                case "gt":
                case "greater_than":
                    return new OperatorGreaterThan(leftValue, rightValue);

                case ">=":
                case "gtq":
                case "greater_equal":
                    return new OperatorGreaterEq(leftValue, rightValue);

                case "<":
                case "lt":
                case "less_than":
                    return new OperatorSmallerThan(leftValue, rightValue);

                case "<=":
                case "ltq":
                case "less_equal":
                    return new OperatorSmallerEq(leftValue, rightValue);

                case "<-":
                case "in":
                    return new OperatorIn(leftValue, rightValue);

                case "!<-":
                case "not_in":
                case "not in":
                case "!in":
                    return new OperatorNotIn(leftValue, rightValue);

                case "->":
                case "contains":
                    return new OperatorContains(leftValue, rightValue);

                case "all":
                    return new OperatorAll(leftValue, rightValue);

                case "empty":
                    return new OperatorEmpty(leftValue);

                case "not empty":
                case "not_empty":
                    return new OperatorNotEmpty(leftValue);

                default:
                    throw new ReportGenerationFailureException("Unknown operator.");
            }
        }
    }
}
