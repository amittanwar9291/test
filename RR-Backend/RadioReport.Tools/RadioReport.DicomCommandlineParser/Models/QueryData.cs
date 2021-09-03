namespace RadioReport.DicomCommandlineParser.Models
{
    public class QueryData
    {
        public string PatientId { get; set; }
        public string StudyInstanceUid { get; set; }
        public string SeriesInstanceUid { get; set; }
        public string AccessionNumber { get; set; }
    }
}
