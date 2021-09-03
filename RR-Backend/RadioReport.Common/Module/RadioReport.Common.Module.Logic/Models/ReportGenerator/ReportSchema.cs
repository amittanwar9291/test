using RadioReport.Common.Logic.Models;
using System.Collections.Generic;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class ReportSchema : ModelBase
    {
        public string ReportTypeName { get; set; }

        public IList<Paragraph> Paragraphs { get; } = new List<Paragraph>();

        public bool IsDefault { get; set; }

        public string VersionName { get; set; }
        
        public long BuildVersion { get; set; }

        public ReportSchemaSession Session { get; set; }
    }
}
