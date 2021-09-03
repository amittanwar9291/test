namespace RadioReport.Common.Logic.Models
{
    public class ErrorResponse
    {
        public string Message { get; set; } = string.Empty;
        public string Payload { get; set; } = string.Empty;
        public string AdditionalInformation { get; set; } = string.Empty;
        public string StackTrace { get; set; } = string.Empty;
    }
}
