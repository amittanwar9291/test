using System.Collections.Generic;

namespace RadioReport.Core.ExportInterface.Domain.Models
{
    public class ExportSectionMap
    {
        public string SectionName { get; set; }
        public List<ExportSectionMap> SubSections { get; } = new List<ExportSectionMap>();
        public string SectionContent { get; set; }
        public string PreSubSectionContent { get; set; }
        public string PostSubSectionContent { get; set; }
    }
}
