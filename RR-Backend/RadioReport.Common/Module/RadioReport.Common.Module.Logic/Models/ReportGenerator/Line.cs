using RadioReport.Common.Logic.Models.ReportModels;
using System.Collections.Generic;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class Line
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string InFixCondition { get; set; }
       
        public string PostFixCondition { get; set; }

        public int LevelOrder { get; set; }

        public string LineSeparator { get; set; }

        public byte PageNumber { get; set; }

        public string FindingType { get; set; }

        // Needed for report generator engine
        public bool IsDeleted { get; set; }

        public List<Translation> Translations { get; } = new List<Translation>();

        public List<Line> ChildLines { get; } = new List<Line>();

        public string Text { get; set; }

        public IEnumerable<ReportSummaryTextModel> Summary { get; set; }

        public List<Metadata> Metadata { get; } = new List<Metadata>();

        public Table Table { get; set; }
    }
}
