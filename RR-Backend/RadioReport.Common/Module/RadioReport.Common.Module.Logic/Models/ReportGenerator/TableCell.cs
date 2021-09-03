using System.Collections.Generic;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class TableCell
    {
        public string Id { get; set; }

        public int Order { get; set; }

        public string Text { get; set; }

        public List<Translation> Translations { get; } = new List<Translation>();
        
        public List<Metadata> Metadata { get; } = new List<Metadata>();
    }
}
