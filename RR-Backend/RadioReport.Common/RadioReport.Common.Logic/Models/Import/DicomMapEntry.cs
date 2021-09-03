namespace RadioReport.Common.Logic.Models.Import
{
    public class DicomMapEntry
    {
        public string DicomTag { get; set; }
        public string Description { get; set; }
        public string Regex { get; set; }
        public string RadioReportId { get; set; }
        public object RadioReportValue { get; set; }
        public string ListPrefix { get; set; }
    }
}
