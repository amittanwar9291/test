using System.Collections.Generic;

namespace RadioReport.Common.Module.Logic.Models.Pages.Suggestions
{
    public class FieldIdsForPage
    {
        public string PageName { get; set; }
        public byte PageNumber { get; set; }
        public IDictionary<string, HashSet<string>> RrIdsWithSuggestions { get; } = new Dictionary<string, HashSet<string>>();
    }
}
