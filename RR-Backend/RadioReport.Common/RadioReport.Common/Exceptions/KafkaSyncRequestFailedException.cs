using System;

namespace RadioReport.Common.Exceptions
{
    public class KafkaSyncRequestFailedException : DomainException
    {
        public KafkaSyncRequestFailedException()
        {
        }

        public KafkaSyncRequestFailedException(string message) : base(message)
        {
        }

        public KafkaSyncRequestFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
