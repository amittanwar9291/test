using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models.ReportList
{
    public class SortOptions
    {
        public string Column { get; set; }
        public bool? Ascending { get; set; }
        public ReportStatus TopStatus { get; set; }
    }
}
