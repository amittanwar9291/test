using System;

namespace RadioReport.Common.Models
{
    public class KafkaSyncResponseBase
    {
        public bool IsSuccess { get; set; }
        public Exception Error { get; set; }
        public string Reason { get; set; }
    }
}
