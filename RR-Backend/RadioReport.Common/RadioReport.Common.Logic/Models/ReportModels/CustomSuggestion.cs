using System.Collections.Generic;

namespace RadioReport.Common.Logic.Models.ReportModels
{
    public class CustomSuggestion
    {
        public List<string> RrIds { get; } = new List<string>();
        public List<string> EnumValues { get; } = new List<string>();
    }
}
