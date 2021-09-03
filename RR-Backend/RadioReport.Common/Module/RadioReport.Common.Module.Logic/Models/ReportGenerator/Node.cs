namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public abstract class Node
    {
        public string Identifier { get; }

        public Node(string identifier)
        {
            Identifier = identifier;
        }
    }
}
