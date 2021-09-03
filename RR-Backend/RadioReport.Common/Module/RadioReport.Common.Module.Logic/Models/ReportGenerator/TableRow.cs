using System.Collections.Generic;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class TableRow
    {
        public int Order { get; set; }

        public List<TableCell> Columns { get; } = new List<TableCell>();
    }
}
