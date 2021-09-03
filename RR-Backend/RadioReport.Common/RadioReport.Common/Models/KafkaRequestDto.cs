namespace RadioReport.Common.Models
{
    public class KafkaRequestDto
    {
        public string Message { get; set; }
        public HttpAuthContext HttpAuthContext { get; set; }
        public bool IsSynchronous { get; set; }
    }
}
