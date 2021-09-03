using System.Collections.Generic;

namespace RadioReport.Common.Logic.Models.ReportModels
{
    public class ReportSummaryModel
    {
        public int Order { get; set; }
        public byte PageNumber { get; set; }
        public string Priority { get; set; }
        public IEnumerable<ReportSummaryTextModel> Translations { get; set; }
        public bool IsAddedByUser { get; set; }
    }
}
