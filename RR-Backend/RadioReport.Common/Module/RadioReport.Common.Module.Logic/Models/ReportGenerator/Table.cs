using System.Collections.Generic;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class Table
    {
        public bool HasHeader { get; set; }
        public string Name { get; set; }
        public List<TableRow> Rows { get; } = new List<TableRow>();
    }
}
