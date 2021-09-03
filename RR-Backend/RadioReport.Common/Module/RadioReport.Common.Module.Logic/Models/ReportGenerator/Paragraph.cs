using System.Collections.Generic;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class Paragraph
    {
        public string Name { get; set; }
        
        public int Order { get; set; }

        public List<Line> Lines { get; } = new List<Line>();

        public List<Metadata> Metadata { get; } = new List<Metadata>();
    }
}
